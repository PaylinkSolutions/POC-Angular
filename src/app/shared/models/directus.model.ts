export interface DirectusList {
  data: Directus[];
}

export interface Directus {
  block_content: string;
  sort?: any;
  date_updated: string;
  environment: string;
  page_name: string;
  date_created: string;
  block_name: string;
  user_updated: string;
  id: number;
}
