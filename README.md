# Development

### Link to Deployed Website
If you used the stencil code, this is `https://tiredpony123.github.io/react`

### Goal and Value of the Application
This application is aims to provide basic functionality for a bakery website. 
The bakery items can be filteres in two different ways:
    1- Union operation
    2- Intersection operarion
The filtering code reflects the basic understanding of filtering in the aforementioned two ways, and can be customized to filter by any other property.

The bakery items can be sorted based on popularity and price. The sorting code reflects the basic understanding of sorting, and can be customized to filter by any other property.

### Usability Principles Considered
Filtering based on the union operation increases the usability of pastry type selection filter. Here, if filter a and b are applied, the results would show all items that are either a or b or both. Ideally, a customer wouldn't want to have a pastry that's both a "pie" and a "croissant." Therefore, if multiple pastry type filters are chosen, the results will show the union of all. 

Filtering based on the intersection operation increases the usability of dietary selection filter. Here, if filter a and b are applied, the results would show only th items that are both in a and b. Usually, if a customer is enetering more than one diertary restrction filters, the chances are they have multipe restrictions they must abide by. Therefore, if "nut-free" and "dairy-free" filters are selected, the results would show items that are both "nut-free" and "dairy-free".

There are three sorting applications. The customers can list the items based on price, which includes "high to low" and "low to high". Or, if they prefer, they can see the most popular items. 

### Organization of Components
There are global constants that hold information about:
    1- items added to cart
    2- total price of the items in the cart
    3- bakery items after the pastry type filter is applied
    4- bakery items after the dietary selection filter is applied
    5- all the bakery items--can be sorted

Both filters and sorting is applied through checkbox ToggleButton components. 

Bakery item components are listed after the relevant filters and sorting choices are applied through the map function. 

Cart item components are listed using the map function from the cart to cartItem.


### How Data is Passed Down Through Components
Map is the primary function that takes the data from the arrays or initial constants that are created. 

The sorted data is stored in sortedDataFinal. Then, two filter functions are used to apply pastry selection and dietary selection choices. Nothing happens if there are no choices made. Then, the filtered and sorted list is converted into individual, visible-on-the-website bakery items through the map function. 

All items that are added to car is stored in cart, which is converted into individual, visible-on-the-website cart items through the map function. 

Since cart total is a float, there is no need to map it. It is simply updated every time a an item is added to or removed from the cart.


### How the User Triggers State Changes
The user might trigger changes in the following ways:
    1- Apply pastry-type filter. By clicking relevant toggle buttons, the user can display only the pastry items of interest. pastryType state is changed through a boolean marking process and filtering accordingly. 
    2- Apply dietary selection filter. By clicking relevant toggle buttons, the user can display pastry items that fit their dietary restrictions. dietary state is changed through a boolean marking process and filtering accordingly. 
    3- Users can choose to apply both types of filters without breaking the website.
    4- Sort items based on price (high to low, low to high) and popularity. sortedData is updted through two-by-two comparison of the relevant property in the array.
    5- Add items to the cart (same items can be added multiple times). The new item is added to the cart state by adding the item to the array. the cartTotal state is updated as the price, with a float type, is added to the stored total (initiated at 0).
    6- Remove items from the cart. The item is remove form the cart using splice funtion to remove a singular instance of the removed item (if there are multiples of the same item added, it would remove them one by one)
