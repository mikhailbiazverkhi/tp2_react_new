/* eslint-disable react/prop-types */

const ProductPrixFiltre = ({ setMinPrix, setMaxPrix }) => {
  return (
    <form className="form-prix">
      <input
        type="number"
        id="minPrix"
        min="0"
        max="1000000"
        placeholder="min prix"
        onChange={(e) => setMinPrix(e.target.value)}
      />
      <input
        type="number"
        id="maxPrix"
        min="0"
        max="1000000"
        placeholder="max prix"
        onChange={(e) => setMaxPrix(e.target.value)}
      />
    </form>
  );
};

export default ProductPrixFiltre;
