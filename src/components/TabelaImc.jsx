const TabelaImc=(resultado) =>{
    if(resultado < 18){
        return(
            <tr>
                <th>Abaixo do Peso</th>
                <th>Abaixo de 18</th>
            </tr>
        );
    }else if(resultado > 18 && resultado <25){
        return(
            <tr>
                <th>Peso Normal</th>
                <th>18 a 24.9</th>
            </tr>
        );
    }else if(resultado >24 && resultado <30){
        return(
            <tr>
                <th>Sobre Peso</th>
                <th>25 a 29.9</th>
            </tr>
        );
    }else if(resultado >29 && resultado <35){
        return(
            <tr>
                <th>Obesidade Grau-1</th>
                <th>30 a 34.9</th>
            </tr>
        );
    }else{
        return(
            <tr>
                <th>Obesidade Mórbida</th>
                <th>Maior ou a 40</th>
            </tr>
        );
    }
}   

export default TabelaImc