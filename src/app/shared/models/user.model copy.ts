export interface DirectusFilterParams {
  filter: Filter;
}

interface Filter {
  // page_name: Pagename;
  environment: Pagename;
}

interface Pagename {
  _eq: string;
}
