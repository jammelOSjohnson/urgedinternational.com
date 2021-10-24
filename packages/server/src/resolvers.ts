import Role from './models/Role.model';
import User from './models/User.model';
import UserInRole from './models/UserInRole.model';
import MenuItem from './models/MenuItem.model';

const resolvers = {
    Query: {
        hello: () => {
            return "Hello World!"
        },
        getAllRoles: async () => {
            return await Role.find();
        },
    },
    Mutation: {
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

        createUser: (_, {Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber}) => {
            const user = new User({Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber});
            return user.save();
        },

        getUser: async (_,{Id}) => {
            return await User.findOne({Id}); 
        },

        createMenuItem(_,{ RetaurantID, MenuCategory,ItemName,ItemCost, ItemDescription}){
            const menuItem =  new MenuItem({RetaurantID, MenuCategory,ItemName,ItemCost, ItemDescription});
            return menuItem.save();
        }
    }
};

export default resolvers;
// module.exports = resolvers;