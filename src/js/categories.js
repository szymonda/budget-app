function getCategories(results, object) {
        const categories = results[0];
        const categoriesArray = Object.values(categories);
        object.categories = categoriesArray;
}

function getSubCategories(results, object) {
        object.subCategories = {};
        object.categories.forEach(category => {
                object.subCategories[category] = [];
        });
        // Sorting subcategories.
        results.forEach((result, index) => {
                if (index > 0) {
                        for (const a in result) {
                                const category = object.categories[a - 1];
                                object.subCategories[category].push(result[a]);
                        }
                }
        });
}

function displayCategories(object) {
        const categorySelect = document.querySelector('#categories');
        object.categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
        });
}

// CHECK IT: It is posting undefined when category doesn't contain subcategory.
function displaySubCategories(object) {
        const categorySelect = document.querySelector('#categories');
        const subCategorySelect = document.querySelector('#subCategories');
        categorySelect.addEventListener('change', e => {
                // Remove previous subcategories.
                if (subCategorySelect.options) {
                        subCategorySelect.innerHTML = '';
                }
                object.categories.forEach(category => {
                        // Display subcategories only if there is a subcategories connected with selected category.
                        if (e.target.value === category && object.subCategories[category].length > 0) {
                                const subCategories = object.subCategories[category];
                                subCategories.forEach(subCategory => {
                                        const option = document.createElement('option');
                                        option.value = subCategory;
                                        option.textContent = subCategory;
                                        subCategorySelect.appendChild(option);
                                });
                        }
                });
        });
}

export { getCategories, getSubCategories, displayCategories, displaySubCategories };
