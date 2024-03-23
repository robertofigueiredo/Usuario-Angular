export interface Usuario{
    id: number;
    nome: string;
    sobrenome: string;
    ativo: boolean;
    dataDeCriacao?:string,
    dataDeAlteracao?: string,
}