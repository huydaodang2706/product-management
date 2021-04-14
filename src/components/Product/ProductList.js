import ProductItem from './ProductItem';

const ProductList = (props) => {
    
    const {items, handleDelete, handleGetItem} = props;
    
    
    let renderListProduct = items?.length > 0 ? items.map((prd, index) => {
        return(
            <ProductItem 
                product={prd}
                key={index}
                handleDelete={handleDelete}
                handleGetItem={handleGetItem}
            />
        )
    }) : (<h1>No data</h1>);
    
    return (
      <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>製品名</th>
                <th>価格</th>
                <th>イメージ</th>
                <th>状態</th>
                <th>記述</th>
                <th>アクション</th>
            </tr>
        </thead>
        <tbody>
        {   
            renderListProduct

        }
        </tbody>
    </table>  
    );
}

export default ProductList;
