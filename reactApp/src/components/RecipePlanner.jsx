import React from 'react';
import useFetch from "./useFetch.jsx";


const RecipePlanner = () => {
    const {data: recipes, isPending, error} = useFetch("http://localhost:3334/recipes");
    return (
        <>
            <h2 className="mb-4">Recipe Planner - Home</h2>
            <p className="mb-4">This page shows all recipes loaded from the backend.
                Later, we can extend this to support selections, shopping lists, and more.</p>

            {error && <div className="alert alert-danger">Error: {error} </div>}

            {isPending && <div className="alert alert-info"> Loading recipes... </div>}

            {recipes && !isPending &&
                <div className="card ">
                    <div className="card-header"><h5>All Recipes</h5></div>
                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                        <tr>
                            <th>Title</th>
                            <th>Time</th>
                            <th>Difficulty</th>
                            <th>Ingredients</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recipes.map((recipe) => (
                            <tr key={recipe.id}>
                                <td className="fw-bold">{recipe.title}</td>
                                <td>{recipe.timeMinutes} min</td>
                                <td>
                                    <span className="badge text-bg-secondary">{recipe.difficulty}</span>
                                </td>
                                <td>{recipe.ingredients ? recipe.ingredients.length : 0}</td>
                                <td><span className="text-secondary">{recipe.desc} </span></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}

export default RecipePlanner;