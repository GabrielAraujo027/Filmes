import { ClassificacaoIndicativa } from './classificacao-indicativa.request';

export class FilmeRequest {
  public Codigo!: string;
  public Titulo!: string;
  public Sinopse!: string;
  public AvaliacaoDaCritica!: number;
  public Genero!: string;
  public DuracaoEmSegundos!: number;
  public ClassificacaoIndicativa!: ClassificacaoIndicativa;
  public DataDeLancamento!: string;
  public LinkCapa!: string;
}
