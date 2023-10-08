import "./App.css";
import React, { useState } from "react";
import { Category } from "./components/category/category";

interface SubCategoryTree {
  name: string;
  subCategoryTree: any[];
}

interface SubCategoryTwo {
  name: string;
  subCategoryTwo: SubCategoryTree[];
}

interface SubCategoryOne {
  name: string;
  subCategoryOne: SubCategoryTwo[];
}

interface CategoryItem {
  name: string;
  subcategories: SubCategoryOne[];
}

function App() {
  const [categories, setCategories] = useState<CategoryItem[]>([
    {
      name: "Kateqoriya",
      subcategories: [],
    },
  ]);

  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const zoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleEditCategory = (newName: string) => {
    const updatedCategories = [...categories];
    updatedCategories[0].name = newName;
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) => {
      let newSubCategory = { name: "altKateqoriya", subCategoryOne: [] };
      item.subcategories.push(newSubCategory);
      return item;
    });
    setCategories(updatedCategories);
  };

  const handleDeleteSubOneCategory = (index: number) => {
    const updatedCategories = [...categories];
    updatedCategories.forEach((item) => {
      item.subcategories = item.subcategories.filter(
        (_, subIndex) => subIndex !== index
      );
    });
    setCategories(updatedCategories);
  };

  const handleEditSubOneCategory = (newNameOne: string, index: number) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((el, i) => {
        if (i === index) {
          el.name = newNameOne;
        }
        return el;
      })
    );
    setCategories(updatedCategories);
  };

  const handleAddSubOneCategory = (id: number) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) => {
      let newCategory = { name: "altKateqoriya 2", subCategoryTwo: [] };
      item.subcategories.map((el, index) => {
        if (index === id) {
          el.subCategoryOne.push(newCategory);
        }
        return el;
      });
      return item;
    });
    console.log(updatedCategories);
    setCategories(updatedCategories);
  };

  const handleDeleteSubTwoCategory = (index: number, indexSubOne: number) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((sub, indexSub) => {
        if (indexSub === index) {
          sub.subCategoryOne = sub.subCategoryOne.filter(
            (_: any, subIndex: number) => subIndex !== indexSubOne
          );
        }
      })
    );
    setCategories(updatedCategories);
  };

  const handleEditSubTwoCategory = (
    newNameTwo: string,
    index: number,
    indexSubOne: number
  ) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((el, i) => {
        if (i === index) {
          el.subCategoryOne.map((subTwo: any, indexSubTwo: number) => {
            if (indexSubTwo === indexSubOne) {
              subTwo.name = newNameTwo;
            }
            return subTwo;
          });
        }
        return el;
      })
    );
    setCategories(updatedCategories);
  };

  const handleAddSubTwoCategory = (id: number, indexSubOne: number) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) => {
      let newCategory = { name: "altKateqoriya 3" };
      item.subcategories.map((el, index) => {
        if (index === id) {
          el.subCategoryOne.map((subTwo: any, i: number) => {
            if (i === indexSubOne) {
              subTwo.subCategoryTwo.push(newCategory);
            }
          });
        }
        return el;
      });
      return item;
    });
    setCategories(updatedCategories);
  };

  const handleDeleteSubTreeCategory = (
    index: number,
    indexSubOne: number,
    indexSubTwo: number
  ) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((sub, indexSub) => {
        if (indexSub === index) {
          sub.subCategoryOne.map((subOne: any, iSubOne: number) => {
            if (iSubOne === indexSubOne) {
              subOne.subCategoryTwo = subOne.subCategoryTwo.filter(
                (_: any, subIndex: number) => subIndex !== indexSubTwo
              );
            }
          });
        }
      })
    );
    setCategories(updatedCategories);
  };

  const handleEditSubTreeCategory = (
    newNameTree: string,
    index: number,
    indexSubOne: number,
    indexSubTwo: number
  ) => {
    const updatedCategories = [...categories];
    updatedCategories.map((item) =>
      item.subcategories.map((el, i) => {
        if (i === index) {
          el.subCategoryOne.map((subTwo: any, iSubTwo: number) => {
            if (iSubTwo === indexSubOne) {
              subTwo.subCategoryTwo.map(
                (subTree: any, indexSubTree: number) => {
                  if (indexSubTree === indexSubTwo) {
                    subTree.name = newNameTree;
                  }
                  return subTree;
                }
              );
            }
          });
        }
      })
    );
    setCategories(updatedCategories);
  };

  return (
    <div className="mainBlock">
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 20, fontWeight: 500 }}>
          Task for the Kamal company
        </span>
      </div>
      <div
        className="zoom-buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <button
          onClick={zoomIn}
          style={{
            backgroundColor: "blue",
            color: "yellow",
            borderStyle: "none",
          }}
        >
          Zoom In
        </button>
        <button
          onClick={zoomOut}
          style={{
            backgroundColor: "yellow",
            color: "blue",
            borderStyle: "none",
          }}
        >
          Zoom Out
        </button>
      </div>
      <div
        className="zoom-container"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        {categories.map((category, index) => (
          <div>
            <Category
              key={index}
              categoryName={category.name}
              subcategoryName={category.subcategories}
              handleEditCategory={handleEditCategory}
              handleAddCategory={handleAddCategory}
              handleDeleteSubOneCategory={handleDeleteSubOneCategory}
              handleEditSubOneCategory={handleEditSubOneCategory}
              handleAddSubOneCategory={handleAddSubOneCategory}
              handleDeleteSubTwoCategory={handleDeleteSubTwoCategory}
              handleAddSubTwoCategory={handleAddSubTwoCategory}
              handleEditSubTwoCategory={handleEditSubTwoCategory}
              handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
              handleEditSubTreeCategory={handleEditSubTreeCategory}
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
}

export default App;
