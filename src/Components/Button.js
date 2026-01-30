import react, {useState} from "react";

const categories = [
  "All",
  "Technology",
  "Health", 
  "Science",
  "Sports",
  "Entertainment",
  "Business",
  "World",
  "Politics",
  "Travel",
  "Lifestyle",
  "Education",
  "Food",
  "Art",
];

const Button = () => {
  const [active, setActive] = useState("All");
  
  return (
    <div className="button-container">
      {categories.map((item)=>(
        <button
          key={item}
          onClick={() => setActive(item)}
          className={active === item ? "active" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
