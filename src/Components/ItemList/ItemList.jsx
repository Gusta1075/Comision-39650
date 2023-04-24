import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid blue",
        justifyContent: "space-evenly",
        padding: "40px",
        
      }}
    >
      {items.map((item) => {
        return (
          <ItemCard item={item} key={item.id}/>
        );
      })}
    </div>
  );
};

export default ItemList;
