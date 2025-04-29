import pandas as pd
import psycopg2

# Caminho para o CSV
csv_path = r'C:\Users\GuilhermeCostaProenç\You On\eqme_export.csv'

# Conexão com o banco PostgreSQL
conn = psycopg2.connect(
    dbname="projeto_mapeamento",
    user="postgres",
    password="050805",  # <--- coloca sua senha aqui
    host="localhost",
    port="5432"
)

cur = conn.cursor()

# Configuração de chunk
chunksize = 1000  # Número de linhas que vamos ler por vez

try:
    for chunk in pd.read_csv(
        csv_path,
        on_bad_lines='skip',
        sep=',',
        encoding='utf-8',
        engine='python',
        chunksize=chunksize
    ):
        for index, row in chunk.iterrows():
            try:
                cur.execute("""
                    INSERT INTO leads_brutos (
                        nome_estabelecimento,
                        tipo_estabelecimento,
                        localizacao,
                        segmento,
                        fonte_dado,
                        data_captura
                    ) VALUES (%s, %s, %s, %s, %s, %s)
                """, (
                    str(row.get('PAC', '')).strip(),
                    str(row.get('TIP_UNID', '')).strip(),
                    'ENEL SP',
                    'C&I',
                    'ENEL_EQME',
                    row.get('DAT_IMO', None)
                ))
            except Exception as e:
                print(f"[ERRO linha {index}] {e}")

        conn.commit()  # COMITA a cada pedaço processado
        print(f"✅ Chunk de {chunksize} linhas inserido com sucesso.")

except Exception as e:
    print(f"Erro ao ler o CSV em chunks: {e}")

cur.close()
conn.close()

print("✅ Importação total finalizada com sucesso!")
