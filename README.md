# Boujee Belle

A React storefront for Boujee Belle — Trendy & Elegant. Browse jewellery and accessories across seven categories, add products to a bag, enter customer and delivery details, choose a payment option, and generate a printable or downloadable Excel invoice using the supplied workbook template.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Store details

Business email and address follow the supplied invoice workbook: `boujeebelle@gmail.com` and Plot 01, Namugongo. The WhatsApp link is prefilled with the number provided for the business. Product descriptions, photos, and UGX prices are sample catalogue content and can be edited in `src/App.jsx`.

## Orders and invoices

The invoice uses the entered customer, product, payment, and delivery details. Its issue date is generated at order time, its due time is 24 hours later, and its number uses the format `YYYY-MM-DD-###`. In this browser-only starter, the daily sequence is stored in the browser, so it is not shared across customers or devices.

WhatsApp and email actions open prefilled messages for review and sending; they do not send automatically. Automatic invoice delivery to both the business and customer requires a deployed order backend plus configured email and WhatsApp Business API credentials. Payment selection records the customer's preference; it does not process a payment.
