export const getContacts = ({ contacts }) => contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {
      return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return result;
  };

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;