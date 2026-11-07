# Boujee Belle

A React storefront for Boujee Belle — Trendy & Elegant. Browse jewellery and accessories across seven categories, add products to a bag, enter customer and delivery details, choose a payment option, and prepare a PDF order invoice for the business.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Store details

Business email and address follow the supplied invoice workbook: `boujeebelle@gmail.com` and Plot 01, Namugongo. The WhatsApp link is prefilled with the number provided for the business. Product descriptions, photos, and UGX prices are sample catalogue content and can be edited in `src/App.jsx`.

## Orders and invoices

The PDF invoice uses the entered customer, product, payment, and delivery details. Its issue date is generated at order time, its due time is 24 hours later, and its number uses `YYDD-###` (for example `2607-001`). The sequence continues for the same YYDD code through the year and is stored in the browser, so it is not shared across customers or devices.

Customers download the PDF and open a prefilled WhatsApp message addressed to the Boujee Belle business number; they must attach the downloaded PDF and send it themselves. The invoice is not emailed to the customer. Automatic delivery and globally unique sequential invoice numbers require a deployed backend and configured business messaging credentials. Payment selection records the customer's preference; it does not process a payment.
