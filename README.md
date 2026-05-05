# Syncfusion React Grid Demo

## Introduction

**Syncfusion® React Data Grid** is a fast, feature-rich component for displaying and managing data in React applications. Perfect for dashboards, admin panels, and analytics platforms with support for CRUD operations, filtering, sorting, paging, and more.

## Installation

### Install Dependencies

```bash
npm install @syncfusion/react-grid
```

### Add Theme to `globals.css`

```css
@import "../node_modules/@syncfusion/react-base/styles/material.css"; 
@import "../node_modules/@syncfusion/react-inputs/styles/material.css"; 
@import "../node_modules/@syncfusion/react-buttons/styles/material.css"; 
@import "../node_modules/@syncfusion/react-dropdowns/styles/material.css"; 
@import "../node_modules/@syncfusion/react-calendars/styles/material.css"; 
@import "../node_modules/@syncfusion/react-navigations/styles/material.css"; 
@import "../node_modules/@syncfusion/react-popups/styles/material.css"; 
@import "../node_modules/@syncfusion/react-pager/styles/material.css"; 
@import "../node_modules/@syncfusion/react-grid/styles/material.css";
```

## 5-Minute Simple Grid with All Data Operations

Create `components/SimpleGrid.tsx`:

```typescript
import React from 'react';
import { Grid, Columns, Column, SearchSettings, FilterSettings, SortSettings, PageSettings } from '@syncfusion/react-grid';

const SimpleGrid = () => {

    const [searchSettings] = useState<SearchSettings>({ enabled: true });
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [toolbarSettings] = useState<string[]>(['Search']);

    const data = [
        { OrderID: 10248, CustomerName: 'VINET', TotalAmount: 32.38, OrderDate: '1996-07-04', Status: 'Pending' },
        { OrderID: 10249, CustomerName: 'TOMSP', TotalAmount: 11.61, OrderDate: '1996-07-05', Status: 'Completed' },
        { OrderID: 10250, CustomerName: 'HANAR', TotalAmount: 65.83, OrderDate: '1996-07-08', Status: 'Pending' },
        { OrderID: 10251, CustomerName: 'VICTE', TotalAmount: 41.34, OrderDate: '1996-07-08', Status: 'Shipped' },
    ];

    return (
        <Grid
            dataSource={data}
            sortSettings={sortSettings}
            filterSettings={filterSettings}
            pageSettings={pageSettings}
            searchSettings={searchSettings}
            toolbar={toolbarSettings}
        >
            <Columns>
                <Column field="OrderID" headerText="Order ID" />
                <Column field="CustomerName" headerText="Name" />
                <Column field="TotalAmount" headerText="Amount" />
                <Column field="OrderDate" headerText="Order Date" />
                <Column field="Status" headerText="Status" />
            </Columns>
        </Grid>
    );
};

export default SimpleGrid;
```

Use in `src/app/page.tsx`:

```typescript
import SimpleGrid from '@/components/SimpleGrid';

export default function Home() {
  return <SimpleGrid />;
}
```

## Core Features

| Feature | Description |
|---------|-------------|
| **Editing** | CRUD operations with Dialog, and Inline modes |
| **Paging** | Client-side and server-side pagination |
| **Filtering** | Advanced filter bar with multiple condition operators |
| **Sorting** | Single and multi-column sorting |
| **Searching** | Global search via toolbar search box |
| **Toolbar** | Add, Edit, Delete buttons |
| **Selection** | Single, Multiple, Checkbox selection modes |
| **Customization** | Custom cell & header templates with React components |
| **Aggregates** | Sum, Average, Min, Max calculations |
| **Accessibility** | WCAG 2.1 Level AA, keyboard navigation, screen readers |
| **Globalization** | Localized dates, numbers, RTL support |
| **Data Binding** | Local arrays, Remote APIs, Real-time updates |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

## Documentation

- [Overview](https://react.syncfusion.com/react-ui/data-grid/overview/)

## 📝 License

This project uses Syncfusion components. Please refer to [Syncfusion License](https://www.syncfusion.com/products/licensing/) for licensing details.
