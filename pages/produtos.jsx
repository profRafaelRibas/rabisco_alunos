import Headerb from '../components/Headerb'
import Titulo from '../components/Titulo'
import CardProdutos from '@/components/CardProdutos'

export default function produtos() {
    return (
        <>
            <Headerb />
            <Titulo texto="Conheça nossos produtos!" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProdutos
                            nome="Caneta"
                            descricao="Caneta Bic Azul"
                            preco={1.30}
                            quantidade={20}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProdutos
                            nome="Caneta"
                            descricao="Caneta Bic Azul"
                            preco={1.30}
                            quantidade={20}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProdutos
                            nome="Caneta"
                            descricao="Caneta Bic Azul"
                            preco={1.30}
                            quantidade={20}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProdutos
                            nome="Caneta"
                            descricao="Caneta Bic Azul"
                            preco={1.30}
                            quantidade={20}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}