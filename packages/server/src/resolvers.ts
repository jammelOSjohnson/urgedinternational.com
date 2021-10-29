import Role from './models/Role.model';
import User from './models/User.model';
import UserInRole from './models/UserInRole.model';
import MenuItem from './models/MenuItem.model';
import Category from './models/Category.model';
import MenuCategory from './models/MenuCategory.model';
import Order from './models/Order.model';

const resolvers = {
    Query: {
        hello: () => {
            return "Hello World!"
        },
        getAllRoles: async () => {
            return await Role.find();
        },
        getCategories: async () => {
            return await Category.find();
        },
        
    },

    Mutation: {
        //Roles
        createRole: (_, {description}) => {
            const identification = new Role({ description });
            return identification.save();
        },

        getRole: async (_,{id}) => {
            return await Role.findOne({id}); 
        },

        getUserInRole: async (_, {UserID}) => {
            return await UserInRole.find({UserID});
        },

        addUserToRole: (_, {UserID, RoleID}) => {
            const userPermision = new UserInRole({UserID, RoleID});
            return userPermision.save();
        },

        //Users
        createUser: (_, {Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber, OpeningHrs, category, MenuItems}) => {
            const user = new User({Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber, OpeningHrs, category, MenuItems});
            return user.save();
        },

        getUser: async (_,{Id}) => {
            return await User.findOne({Id}).populate({path: "categories", model: "category"});; 
        },

        //Categories
        createCategory: (_, {Id , Name}) => { 
            const category = new Category({Id, Name});
            return category.save();
        },

        getMenucategories: async (_,{Id}) => {
            return await User.findOne({Id});
        },

        //Menus
        createMenuItem: (_,{ RetaurantID, MenuCategory,ItemName,ItemCost, ItemDescription}) => {
            const menuItem =  new MenuItem({RetaurantID, MenuCategory,ItemName,ItemCost, ItemDescription});
            return menuItem.save();
        },

        createMenuCategory: (_,{restaurant, Category}) => {
            const menuCategory = new MenuCategory({restaurant, Category});
            return menuCategory.save();
        },

        //Orders
        createOrder: (_,{Id,OrderItems,OrderStatus,OrderTotal,OrderDate,Rider}) => {
            const orderItem = new Order({Id, OrderItems, OrderStatus, OrderTotal, OrderDate, Rider});
            return orderItem.save();
        },
        
        //Reastaurants
        getRestaurants: async () => {
            const res = await User.find().populate("category").where('OpeningHrs').ne(null).where('category').ne(null);
            console.log(res);
            return res;
        }
    }
};

export default resolvers;
// module.exports = resolvers;