import React, { useState } from 'react';
import logo from "../assets/logomandu.png";

const UserDashboard = () => {
  // Dummy data for user and recipe cards
  const userData = {
    username: 'JohnDoe',
    profilePicture: 'https://source.unsplash.com/40x40/?person',
  };

  const handleReload = () => {
    window.location.reload();
  };

  const [isAddRecipeModalOpen, setAddRecipeModalOpen] = useState(false);
  const [isSelectIngredientsModalOpen, setSelectIngredientsModalOpen] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    portions: 1,
    steps: [''],
    ingredients: [],
  });
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState([]);

  const openAddRecipeModal = () => {
    setAddRecipeModalOpen(true);
  };

  const closeAddRecipeModal = () => {
    setAddRecipeModalOpen(false);
    // Reset new recipe form fields
    setNewRecipe({
      title: '',
      description: '',
      portions: 1,
      steps: [''],
      ingredients: [],
    });
  };

  const openSelectIngredientsModal = () => {
    setSelectIngredientsModalOpen(true);
  };

  const closeSelectIngredientsModal = () => {
    setSelectIngredientsModalOpen(false);
  };
  
  const handleAddIngredient = (ingredient) => {
    setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    setSelectedIngredientIds((prevIds) => [...prevIds, ingredient.id]);
  };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients((prevIngredients) => prevIngredients.filter((item) => item.id !== ingredient.id));
    setSelectedIngredientIds((prevIds) => prevIds.filter((id) => id !== ingredient.id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleAddStep = () => {
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      steps: [...prevRecipe.steps, ''],
    }));
  };

  const handleRemoveStep = (index) => {
    setNewRecipe((prevRecipe) => {
      const updatedSteps = [...prevRecipe.steps];
      updatedSteps.splice(index, 1);
      return {
        ...prevRecipe,
        steps: updatedSteps,
      };
    });
  };

  const handleStepChange = (index, value) => {
    setNewRecipe((prevRecipe) => {
      const updatedSteps = [...prevRecipe.steps];
      updatedSteps[index] = value;
      return {
        ...prevRecipe,
        steps: updatedSteps,
      };
    });
  };

  const handleAddRecipe = () => {
    // Handle logic to add a new recipe
    console.log('New Recipe:', newRecipe);
    // You can add further logic here to handle the addition of a new recipe
    closeAddRecipeModal();
  };

  // Dummy data for recipe cards
  const recipeData = [
    { name: 'Healthy Salad', stars: 4, calories: 300, image: 'https://source.unsplash.com/400x300/?salad' },
    { name: 'Vegetarian Pasta', stars: 5, calories: 500, image: 'https://source.unsplash.com/400x300/?pasta' },
    { name: 'Smoothie Bowl', stars: 3, calories: 250, image: 'https://source.unsplash.com/400x300/?smoothie' },
    { name: 'Grilled Chicken', stars: 4, calories: 400, image: 'https://source.unsplash.com/400x300/?chicken' },
    { name: 'Fruit Parfait', stars: 5, calories: 200, image: 'https://source.unsplash.com/400x300/?parfait' },
    { name: 'Veggie Stir Fry', stars: 3, calories: 350, image: 'https://source.unsplash.com/400x300/?stirfry' },
    // Add more recipe data as needed
  ];

  // Dummy data for ingredients
  const ingredientData = [
    { id: 1, name: 'Tomato' },
    { id: 2, name: 'Lettuce' },
    { id: 3, name: 'Cheese' },
    { id: 4, name: 'Chicken' },
    // Add more ingredients as needed
  ];

  return (
<div className="min-h-screen">
      {/* Navbar Section */}
      <nav className="bg-pink-600 p-4 text-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={logo}  // Adjust the path based on your project structure
            alt="Logo"
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span>{userData.username}</span>
          <button onClick={handleReload} className="hover:underline focus:outline-none hover:text-gray-300 transition duration-300 ease-in-out">
            Home
          </button>
          <button className="hover:underline focus:outline-none hover:text-gray-300 transition duration-300 ease-in-out">
            Nutricionistas
          </button>
          <button className="hover:underline focus:outline-none hover:text-gray-300 transition duration-300 ease-in-out">
            Forum
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md text-black"
          />
           <button onClick={openAddRecipeModal} className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600 transition duration-300 focus:outline-none">
            Add Recipe
          </button>
          <button className="bg-white text-pink-600 px-3 py-1 rounded-md hover:bg-pink-200 transition duration-300 focus:outline-none">
            Logout
          </button>
        </div>
      </nav>

      {/* Recipe Cards Section */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Escoge las recetas que más te gustan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipeData.map((recipe, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
              <div className="flex mb-2">
                <span className="text-yellow-500">
                  {/* Render stars based on the stars value */}
                  {Array.from({ length: recipe.stars }, (_, starIndex) => (
                    <span key={starIndex}>&#9733;</span>
                  ))}
                </span>
              </div>
              <p className="text-gray-600">Calories: {recipe.calories}</p>
            </div>
          ))}
        </div>
      </div>

       {/* Add Recipe Modal */}
       {isAddRecipeModalOpen && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-[600px]">
              <h2 className="text-2xl font-bold mb-4">Añadir Nueva Receta</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                <input
                  type="text"
                  name="title"
                  value={newRecipe.title}
                  onChange={handleInputChange}
                  className="border p-2 w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                <textarea
                  name="description"
                  value={newRecipe.description}
                  onChange={handleInputChange}
                  className="border p-2 w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Porciones:</label>
                <input
                  type="number"
                  name="portions"
                  value={newRecipe.portions}
                  onChange={handleInputChange}
                  className="border p-2 w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Pasos:</label>
                {newRecipe.steps.map((step, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => handleStepChange(index, e.target.value)}
                      className="border p-2 flex-grow rounded-md mr-2"
                    />
                    <button onClick={() => handleRemoveStep(index)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 focus:outline-none">
                      -
                    </button>
                  </div>
                ))}
                <button onClick={handleAddStep} className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300 focus:outline-none w-full">
                  Agregar Paso
                </button>
              </div>
              <div className="mb-4">
                {/* Ingredient selection goes here */}
                {/* Add your logic for selecting ingredients */}
                <button onClick={openSelectIngredientsModal} className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none w-full">
                  Seleccionar Ingredientes
                </button>
              </div>
              <div className="mb-4">
                <button onClick={handleAddRecipe} className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none w-full">
                  Añadir Receta
                </button>
              </div>
              <div className="mb-4">
                <button onClick={closeAddRecipeModal} className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition duration-300 focus:outline-none w-full">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
      )}

   {/* Select Ingredients Modal */}
   {isSelectIngredientsModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Seleccionar Ingredientes</h2>
            {/* Search bar goes here */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar ingredientes..."
                className="border p-2 w-full rounded-md"
              />
            </div>
            {/* List of food items with buttons */}
            <ul>
              {ingredientData.map((ingredient) => (
                <li key={ingredient.id} className="flex justify-between items-center mb-2">
                  {selectedIngredientIds.includes(ingredient.id) ? (
                    <button
                      onClick={() => handleRemoveIngredient(ingredient)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 focus:outline-none"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddIngredient(ingredient)}
                      className={`bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none ${
                        selectedIngredientIds.includes(ingredient.id) && 'hidden'
                      }`}
                    >
                      +
                    </button>
                  )}
                  <span>{ingredient.name}</span>
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <button onClick={closeSelectIngredientsModal} className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none w-full">
                Listo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;