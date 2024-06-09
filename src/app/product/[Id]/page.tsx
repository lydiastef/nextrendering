import Link from 'next/link';
import '../../style.css';


type ProductPageProps = {
  params: { id: string };
};

const fetchProductData = async (id: string) => {
  const product = { id, name: 'Product ' + id, description: 'Description for product ' + id };
  return product;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await fetchProductData(params.id);

  return (
    <div className='main-container'>
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    <div>
      <Link href='/'>
        <button className='drbtn'>Home</button>
      </Link>
      <Link href='/profile'>
        <button className='drbtn'>Profile</button>
      </Link>
      <Link href='/dashboard'>
          <button className='drbtn'>Dashboard</button>
      </Link>
      <Link href='/product/1'>
        <button className='drbtn'>Product 1</button>
      </Link>
      <Link href='/product/2'>
        <button className='drbtn'>Product 2</button>
      </Link>
    </div>
    </div>
  );
};

export default ProductPage;
