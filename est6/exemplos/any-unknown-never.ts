let anyEstaDevolta: any;
anyEstaDevolta = 3;
anyEstaDevolta = 'teste';
anyEstaDevolta = true;

let stringTest: string = 'verificar'
stringTest = anyEstaDevolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor =  true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor;

if(typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)

