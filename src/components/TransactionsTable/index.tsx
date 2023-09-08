import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable(){
    useEffect(() =>{
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="credit">R$1300</td>
                        <td>Coachecom</td>
                        <td>03/09/2023</td>
                    </tr>
                    <tr>
                        <td>Supermercado</td>
                        <td className="debit">-R$300</td>
                        <td>Compras</td>
                        <td>03/09/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}