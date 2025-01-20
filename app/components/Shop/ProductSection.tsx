import ProductSecondSection from "./ProductSecondSection";


const ProductPage = () => {
  return (
    <div className="">
      <div className="text-sm flex justify-center items-center gap-4 pt-6">
        <p>Description</p>
        <p>Additional Information</p>
        <p>
          Reviews <span className="text-green-500">0</span>
        </p>
      </div>
      <div className="border-b border-2  my-5"></div>
      <ProductSecondSection />
    </div>
  );
};

export default ProductPage;
