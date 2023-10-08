import { useRef, useState } from "react";
import "./styles/category.css";
import { SubCategoryOne } from "./subCategoryOne";
import Lines from "./lines";
import HorizontalLine from "./horizontalLine";

interface CategoryProps {
  categoryName: string;
  subcategoryName: any[];
  handleEditCategory: (newName: string) => void;
  handleAddCategory: () => void;
  handleDeleteSubOneCategory: (index: number) => void;
  handleEditSubOneCategory: (newNameOne: string, index: number) => void;
  handleAddSubOneCategory: (id: number) => void;
  handleDeleteSubTwoCategory: (index: number, indexSubOne: number) => void;
  handleEditSubTwoCategory: (
    newNameTwo: string,
    index: number,
    indexSubOne: number
  ) => void;
  handleAddSubTwoCategory: (id: number, indexSubOne: number) => void;
  handleDeleteSubTreeCategory: (
    index: number,
    indexSubOne: number,
    indexSubTwo: number
  ) => void;
  handleEditSubTreeCategory: (
    newNameTree: string,
    indexSubTwo: number,
    index: number,
    indexSubOne: number
  ) => void;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

export const Category: React.FC<CategoryProps> = (props) => {
  const {
    categoryName,
    subcategoryName,
    handleEditCategory,
    handleAddCategory,
    handleDeleteSubOneCategory,
    handleEditSubOneCategory,
    handleAddSubOneCategory,
    handleDeleteSubTwoCategory,
    handleEditSubTwoCategory,
    handleAddSubTwoCategory,
    handleDeleteSubTreeCategory,
    handleEditSubTreeCategory,
    x,
    y,
    offsetX,
    offsetY,
  } = props;
  const [newName, setNewName] = useState<string>("");
  const [showButton, setShowButton] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setShowButton(false);
    }
  };

  const handleChangedCategoryName = () => {
    handleEditCategory(newName);
    setShowButton(true);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ paddingTop: 20 }}>
        <input
          style={{
            width: 200,
            height: 30,
            borderWidth: 1,
            borderColor: "#DCDCDC",
            borderStyle: "solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={inputRef}
          placeholder={categoryName}
          onChange={(e) => setNewName(e.target.value)}
          value={newName ? newName : categoryName}
        />
        {showButton ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 5,
            }}
          >
            <button
              onClick={handleClick}
              style={{
                backgroundColor: "grey",
                color: "white",
                borderStyle: "none",
              }}
            >
              change
            </button>
            <button
              onClick={handleAddCategory}
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              +
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: 5,
            }}
          >
            <button
              onClick={() => handleChangedCategoryName()}
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              yes
            </button>
            <button
              onClick={() => setShowButton(true)}
              style={{
                backgroundColor: "red",
                color: "white",
                borderStyle: "none",
              }}
            >
              no
            </button>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: 10 }}>
        {subcategoryName.map((item, index) => (
          <div className="spaceBLocks" key={index}>
            <HorizontalLine x1={"100%"} y1={0} y={5} />
            <Lines x1={x} y1={y} x2={x + offsetX} y2={y + offsetY} />
            <SubCategoryOne
              handleDeleteSubOneCategory={handleDeleteSubOneCategory}
              handleEditSubOneCategory={handleEditSubOneCategory}
              handleAddSubOneCategory={handleAddSubOneCategory}
              handleDeleteSubTwoCategory={handleDeleteSubTwoCategory}
              handleEditSubTwoCategory={handleEditSubTwoCategory}
              handleAddSubTwoCategory={handleAddSubTwoCategory}
              handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
              handleEditSubTreeCategory={handleEditSubTreeCategory}
              key={index}
              item={item}
              index={index}
              x={100}
              y={0}
              offsetX={0}
              offsetY={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
