// Interfaces
export interface NotionResponse {
    object: string;
    results: any[];
    next_cursor: string | null;
    has_more: boolean;
}

export interface NotionFilter {
    and?: object[];
    or?: object[];
    property?: string;
    [key: string]: any;
}

export interface NotionSort {
    property: string;
    direction: "ascending" | "descending";
}

export interface NotionQueryParams {
    filter?: NotionFilter;
    sorts?: NotionSort[];
}

export interface NotionPageProperties {
    [key: string]: {
        type: string;
        [key: string]: any;
    };
}

export interface NotionPageBody {
    parent: {
        database_id: string;
    };
    icon?: {
        emoji: string;
    };
    properties: NotionPageProperties;
    children?: any[];
}

export interface NotionDatabaseAPI {
    object: string;
    results: Array<NotionDatabase>;
    next_cursor: string | null;
    has_more: boolean;
    type: string;
    page_or_database: any;
    request_id: string;
}

export interface NotionDatabase {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    title: Array<{
        type: string;
        text: {
            content: string;
            link: string | null;
        };
        annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
        };
        plain_text: string;
        href: string | null;
    }>;
    properties: {
        [key: string]: Properties
    };
    url: string;
}

export interface Properties {
    id: string;
    type: string;
    checkbox?: boolean;
    select?: {
        name: string;
        color: string;
    };
    multi_select?: Array<{
        name: string;
        color: string;
    }>;
    date?: {
        start: string;
        end: string | null;
    };
    title: Title[]
    // Agrega aquí otros tipos de propiedades según sea necesario
};

interface Title {
    type: string;
    text: {
      content: string;
      link: null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: null;
  }