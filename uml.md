# Forkify Project UML Diagrams

## 1. High-Level Architecture (MVC Pattern)

```mermaid
classDiagram
  class Controller {
    +controlRecipes()
    +controlSearchResults()
    +controlPagination()
    +init()
  }
  class Model {
    +state
    +loadRecipe(id)
    +loadSearchResults(query)
  }
  class View
  class RecipeView
  class ResultsView
  class SearchView
  class PaginationView

  Controller --> Model : uses
  Controller --> RecipeView : uses
  Controller --> ResultsView : uses
  Controller --> SearchView : uses
  Controller --> PaginationView : uses

  RecipeView --|> View
  ResultsView --|> View
  PaginationView --|> View
```

---

## 2. Model Structure

```mermaid
classDiagram
  class Model {
    +state : Object
    +loadRecipe(id)
    +loadSearchResults(query)
  }
  class State {
    +recipe : Object
    +search : Object
  }
  Model --> State : manages
```

---

## 3. View Inheritance

```mermaid
classDiagram
  class View {
    +render(data)
    +renderSpinner()
    +renderError(message)
    +renderMessage(message)
  }
  class RecipeView {
    +render(data)
    +_generateMarkup()
  }
  class ResultsView {
    +_generateMarkup()
    +_generateMarkupPreview(result)
  }
  class PaginationView {
    +addHandlerClick(handler)
  }
  class SearchView {
    +getQuery()
    +addHandlerSearch(handler)
  }

  RecipeView --|> View
  ResultsView --|> View
  PaginationView --|> View
```

---

## 4. Helpers and Utilities

```mermaid
classDiagram
  class Helpers {
    +getJSON(id)
    +timeout(s)
    +Fraction_function
  }
  class Fraction_function {
    +toString()
    +valueOf()
  }
  Helpers --> Fraction_function : uses
```

---

## 5. Sequence Diagram: Recipe Loading Flow

```mermaid
sequenceDiagram
  participant User
  participant Controller
  participant Model
  participant RecipeView
  participant API

  User->>Controller: Changes URL hash (selects recipe)
  Controller->>RecipeView: renderSpinner()
  Controller->>Model: loadRecipe(id)
  Model->>API: getJSON(API_URL + id)
  API-->>Model: Recipe data (JSON)
  Model->>Model: Parse and update state.recipe
  Model-->>Controller: (async return)
  Controller->>RecipeView: render(state.recipe)
  RecipeView->>RecipeView: _generateMarkup()
  RecipeView-->>User: Rendered recipe in DOM
```

---

## 6. Sequence Diagram: Search Recipes Flow

```mermaid
sequenceDiagram
  participant User
  participant SearchView
  participant Controller
  participant Model
  participant ResultsView
  participant PaginationView
  participant API

  User->>SearchView: Submits search form
  SearchView->>Controller: addHandlerSearch(handler)
  Controller->>SearchView: getQuery()
  SearchView-->>Controller: query string
  Controller->>ResultsView: renderSpinner()
  Controller->>Model: loadSearchResults(query)
  Model->>API: getJSON(API_URL + "?search=" + query)
  API-->>Model: Search results (JSON)
  Model->>Model: Parse and update state.search
  Model-->>Controller: (async return)
  Controller->>ResultsView: render(getSearchResultsPage())
  Controller->>PaginationView: render(state.search)
  ResultsView-->>User: Rendered search results
  PaginationView-->>User: Rendered pagination controls
```

---

## 7. Sequence Diagram: Pagination Flow

```mermaid
sequenceDiagram
  participant User
  participant PaginationView
  participant Controller
  participant ResultsView
  participant PaginationView2

  User->>PaginationView: Clicks pagination button
  PaginationView->>Controller: addHandlerClick(handler)
  Controller->>ResultsView: render(getSearchResultsPage(goToPage))
  Controller->>PaginationView2: render(state.search)
  ResultsView-->>User: Updated search results
  PaginationView2-->>User: Updated pagination controls
```
