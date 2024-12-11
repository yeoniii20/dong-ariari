import React from "react";

interface SearchTermContext {
  searchTerm: string | null;
  setSearchTerm: React.Dispatch<React.SetStateAction<string | null>>;
}

const defaultContextValue: SearchTermContext = {
  searchTerm: null,
  setSearchTerm: () => {},
};

const SearchTermContext =
  React.createContext<SearchTermContext>(defaultContextValue);

export default SearchTermContext;
