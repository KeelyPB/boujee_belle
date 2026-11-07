import React, { useEffect, useMemo, useState } from "react";

const BUSINESS = {
  name: "Boujee Belle",
  email: "boujeebelle@gmail.com",
  whatsapp: "256791647172",
  address: "Plot 01, Namugongo",
};

const categories = [
  { name: "Earrings", icon: "✧" },
  { name: "Ear pins", icon: "◌" },
  { name: "Bags", icon: "▱" },
  { name: "Arm cuffs", icon: "◡" },
  { name: "Necklaces", icon: "⌁" },
  { name: "Anklets", icon: "〰" },
  { name: "Rings", icon: "◇" },
];

const products = [
  { id: 1, name: "Golden Hour Hoops", category: "Earrings", price: 45000, image: "photo-1535632066927-ab7c9ab60908", detail: "Sculpted golden hoops with a softly brushed finish. Your everyday statement pair." },
  { id: 2, name: "Petal Drop Earrings", category: "Earrings", price: 52000, image: "photo-1617038220319-276d3cfab638", detail: "Delicate floral drops that add a little romance to every outfit." },
  { id: 3, name: "Pearl Muse Earrings", category: "Earrings", price: 38000, image: "photo-1535632066927-ab7c9ab60908", detail: "Classic luminous pearls with a lovely modern twist." },
  { id: 4, name: "Dainty Star Ear Pins", category: "Ear pins", price: 28000, image: "photo-1611652022419-a9419f74343d", detail: "Tiny sparkling stars, perfect for a little everyday magic." },
  { id: 5, name: "Luna Ear Pins", category: "Ear pins", price: 32000, image: "photo-1611591437281-460bfbe1220a", detail: "A minimal moon-and-star pair made for easy layering." },
  { id: 6, name: "Pearl Dot Ear Pins", category: "Ear pins", price: 25000, image: "photo-1605100804763-247f67b3557e", detail: "Sweet, simple pearl studs for your jewellery-box essentials." },
  { id: 7, name: "The Belle Mini Bag", category: "Bags", price: 145000, image: "photo-1584917865442-de89df76afd3", detail: "A chic little shoulder bag with room for all your going-out essentials." },
  { id: 8, name: "Rosé Evening Clutch", category: "Bags", price: 120000, image: "photo-1591561954557-26941169b49e", detail: "A polished, pretty clutch to take you from dinner to dancing." },
  { id: 9, name: "Everyday Charm Bag", category: "Bags", price: 165000, image: "photo-1548036328-c9fa89d128fa", detail: "An easy-to-style handbag with a timeless shape and a lovely finish." },
  { id: 10, name: "Golden Curve Cuff", category: "Arm cuffs", price: 48000, image: "photo-1611652022419-a9419f74343d", detail: "A fluid, open cuff that looks gorgeous worn on its own or stacked." },
  { id: 11, name: "Sculpted Shine Cuff", category: "Arm cuffs", price: 56000, image: "photo-1611591437281-460bfbe1220a", detail: "A softly sculpted gold-tone cuff with an elegant, organic silhouette." },
  { id: 12, name: "Pearl Glow Cuff", category: "Arm cuffs", price: 62000, image: "photo-1617038220319-276d3cfab638", detail: "A dainty pearl-accented bracelet cuff for a dressed-up everyday look." },
  { id: 13, name: "Amara Layered Necklace", category: "Necklaces", price: 68000, image: "photo-1599643478518-a784e5dc4c8f", detail: "Two delicate golden chains, thoughtfully layered into one easy piece." },
  { id: 14, name: "Pearl Wish Necklace", category: "Necklaces", price: 74000, image: "photo-1611652022419-a9419f74343d", detail: "A little luminous pearl pendant on a fine, graceful chain." },
  { id: 15, name: "Sol Pendant Necklace", category: "Necklaces", price: 59000, image: "photo-1611591437281-460bfbe1220a", detail: "A golden sunburst pendant to bring a little glow to your day." },
  { id: 16, name: "Dainty Gold Anklet", category: "Anklets", price: 35000, image: "photo-1617038220319-276d3cfab638", detail: "A fine, adjustable anklet with a sweet golden glimmer." },
  { id: 17, name: "Bella Beaded Anklet", category: "Anklets", price: 42000, image: "photo-1535632066927-ab7c9ab60908", detail: "Pretty little beads and a dainty chain for sunshine-filled days." },
  { id: 18, name: "Golden Link Anklet", category: "Anklets", price: 39000, image: "photo-1535632066927-ab7c9ab60908", detail: "A playful fine-link anklet with an adjustable, comfortable fit." },
  { id: 19, name: "Golden Hour Ring", category: "Rings", price: 42000, image: "photo-1605100804763-247f67b3557e", detail: "A polished gold-tone ring with an easy-to-style, timeless silhouette." },
  { id: 20, name: "Pearl Promise Ring", category: "Rings", price: 48000, image: "photo-1611652022419-a9419f74343d", detail: "A delicate pearl-accented ring for a little everyday elegance." },
  { id: 21, name: "Dainty Sparkle Ring", category: "Rings", price: 35000, image: "photo-1535632066927-ab7c9ab60908", detail: "A fine, sparkly little ring made for stacking or wearing solo." },
];

const slides = [
  { image: "photo-1617038220319-276d3cfab638", title: "A little sparkle, a lot of you.", subtitle: "Jewellery that makes every day feel like your day." },
  { image: "photo-1599643478518-a784e5dc4c8f", title: "Made for your kind of magic.", subtitle: "Find the finishing touch you’ll reach for again and again." },
  { image: "photo-1584917865442-de89df76afd3", title: "Lovely things, lovingly chosen.", subtitle: "The bags and beautiful details you’ve been looking for." },
];

const imageUrl = (image, width = 720) =>
  `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=85`;

const money = (amount) =>
  new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    maximumFractionDigits: 0,
  }).format(amount);

const dateTime = (date) =>
  new Intl.DateTimeFormat("en-UG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Kampala",
  }).format(date);

const dayStamp = (date) =>
  new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Africa/Kampala",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

function makeInvoiceNumber(now) {
  const date = dayStamp(now);
  const key = `boujee-belle-invoice-${date}`;
  const sequence = Number(window.localStorage.getItem(key) || "0") + 1;
  window.localStorage.setItem(key, String(sequence));
  return `${date}-${String(sequence).padStart(3, "0")}`;
}

async function downloadInvoiceWorkbook(invoice) {
  const { default: ExcelJS } = await import("exceljs");
  const response = await fetch("/boujee-belle-invoice-template.xlsx");
  if (!response.ok) throw new Error(`Invoice template request failed: ${response.status}`);

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(await response.arrayBuffer());
  const sheet = workbook.worksheets[0];
  if (!sheet) throw new Error("The invoice template has no worksheet.");

  const firstItemRow = 12;
  const initialItemCapacity = 6;
  const extraRows = Math.max(0, invoice.items.length - initialItemCapacity);
  if (extraRows > 0) {
    const additionalRows = Array.from({ length: extraRows }, () => []);
    sheet.spliceRows(18, 0, ...additionalRows);
    for (let rowNumber = 18; rowNumber < 18 + extraRows; rowNumber += 1) {
      const row = sheet.getRow(rowNumber);
      const styledRow = sheet.getRow(17);
      row.height = styledRow.height;
      styledRow.eachCell({ includeEmpty: true }, (cell, column) => {
        row.getCell(column).style = { ...cell.style };
      });
    }
  }

  const paymentRow = 26 + extraRows;
  sheet.spliceRows(paymentRow, 0, []);

  const table = sheet.getTable("Table1");
  if (!table) throw new Error("The invoice template is missing its item table.");
  const lastItemRow = firstItemRow + invoice.items.length - 1;
  table.table.tableRef = `B11:F${lastItemRow}`;
  table.table.autoFilterRef = `B11:F${lastItemRow}`;
  table.commit();

  sheet.getCell("F4").value = `+${BUSINESS.whatsapp}`;
  sheet.getCell("C7").value = invoice.issuedAt;
  sheet.getCell("C7").numFmt = "dd mmm yyyy hh:mm";
  sheet.getCell("C8").value = invoice.dueAt;
  sheet.getCell("C8").numFmt = "dd mmm yyyy hh:mm";
  sheet.getCell("F7").value = invoice.number;
  const customerRow = 21 + extraRows;
  sheet.getCell(`C${customerRow}`).value = invoice.customer.name;
  sheet.getCell(`C${customerRow + 1}`).value = invoice.customer.address;
  sheet.getCell(`C${customerRow + 2}`).value = invoice.customer.phone;
  sheet.getCell(`C${customerRow + 3}`).value = invoice.customer.email;
  sheet.getCell(`F${customerRow}`).value = BUSINESS.name;
  sheet.getCell(`F${customerRow + 1}`).value = BUSINESS.address;
  sheet.getCell(`F${customerRow + 2}`).value = `+${BUSINESS.whatsapp}`;
  sheet.getCell(`F${customerRow + 3}`).value = BUSINESS.email;

  const deliveryRow = 25 + extraRows;
  for (const rowNumber of [deliveryRow, paymentRow]) {
    const row = sheet.getRow(rowNumber);
    const styleSource = sheet.getRow(customerRow + 3);
    styleSource.eachCell({ includeEmpty: true }, (cell, column) => {
      row.getCell(column).style = { ...cell.style };
    });
  }
  sheet.getCell(`B${deliveryRow}`).value = "Deliver to:";
  sheet.getCell(`C${deliveryRow}`).value = `${invoice.delivery.address} · ${invoice.delivery.date} at ${invoice.delivery.time}${invoice.delivery.notes ? ` · ${invoice.delivery.notes}` : ""}`;
  sheet.getCell(`B${paymentRow}`).value = "Payment:";
  sheet.getCell(`C${paymentRow}`).value = invoice.payment;
  sheet.mergeCells(`C${deliveryRow}:F${deliveryRow}`);
  sheet.mergeCells(`C${paymentRow}:F${paymentRow}`);
  sheet.getCell(`C${deliveryRow}`).alignment = { wrapText: true, vertical: "middle" };
  sheet.getRow(deliveryRow).height = 32;

  invoice.items.forEach((item, index) => {
    const row = sheet.getRow(firstItemRow + index);
    row.getCell(2).value = index + 1;
    row.getCell(3).value = `${item.name} (${item.category})`;
    row.getCell(4).value = item.quantity;
    row.getCell(5).value = item.price;
    row.getCell(6).value = item.price * item.quantity;
  });

  const totalRow = 19 + extraRows;
  sheet.getCell(`F${totalRow}`).value = {
    formula: `SUM(F${firstItemRow}:F${lastItemRow})`,
    result: invoice.total,
  };

  const data = await workbook.xlsx.writeBuffer();
  const file = new Blob([data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Boujee-Belle-Invoice-${invoice.number}.xlsx`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function Icon({ name, size = 20 }) {
  const shared = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (name === "bag") return <svg {...shared}><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>;
  if (name === "arrow") return <svg {...shared}><path d="M4 12h15M13 5l7 7-7 7" /></svg>;
  if (name === "heart") return <svg {...shared}><path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.6 4.6 0 0 1 8.8-1.6 4.6 4.6 0 0 1 8.8 1.6Z" /></svg>;
  if (name === "close") return <svg {...shared}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === "phone") return <svg {...shared}><path d="M7.5 3.8 10 8l-2 2c1.2 2.4 3.3 4.5 5.8 5.8l2-2 4.2 2.5-.8 4a2 2 0 0 1-2.2 1.6C9 21 3 15 2.1 7a2 2 0 0 1 1.6-2.2l3.8-1Z" /></svg>;
  if (name === "email") return <svg {...shared}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m4 7 8 6 8-6" /></svg>;
  if (name === "instagram") return <svg {...shared}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg>;
  if (name === "whatsapp") return <svg {...shared}><path d="M20.4 11.7a8.3 8.3 0 0 1-12.3 7.2L3 20l1.2-4.9a8.3 8.3 0 1 1 16.2-3.4Z" /><path d="M8.2 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.7-.8c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.4.2-1 .4-1.6.3-1.1-.2-2.4-.8-3.8-2.1-1.1-1-2.2-2.4-2.5-3.5-.2-.9.1-1.7.3-2.1Z" /></svg>;
  return <svg {...shared}><path d="M12 3v18M3 12h18" /></svg>;
}

function ProductCard({ product, onView, onAdd }) {
  return (
    <article className="product-card">
      <button className="product-image-button" onClick={() => onView(product)} aria-label={`View ${product.name}`}>
        <img src={imageUrl(product.image)} alt={product.name} loading="lazy" />
        <span className="image-tag">Just for you</span>
      </button>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <button className="product-title" onClick={() => onView(product)}>{product.name}</button>
        <div className="product-bottom">
          <strong>{money(product.price)}</strong>
          <button className="add-button" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}><Icon name="plus" size={17} /></button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("All");
  const [slide, setSlide] = useState(0);
  const [cart, setCart] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "", address: "" });
  const [delivery, setDelivery] = useState({ address: "", date: "", time: "", notes: "" });
  const [payment, setPayment] = useState("Mobile Money");
  const [invoice, setInvoice] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(""), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const visibleProducts = useMemo(
    () => products.filter((product) => category === "All" || product.category === category),
    [category],
  );

  function navigate(nextPage) {
    setPage(nextPage);
    setQuickView(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addToCart(product) {
    setCart((items) => {
      const current = items.find((item) => item.id === product.id);
      return current
        ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { ...product, quantity: 1 }];
    });
    setNotice(`${product.name} added to your bag`);
  }

  function changeQuantity(id, amount) {
    setCart((items) => items
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0));
  }

  function placeOrder(event) {
    event.preventDefault();
    const now = new Date();
    const order = {
      number: makeInvoiceNumber(now),
      issuedAt: now,
      dueAt: new Date(now.getTime() + 24 * 60 * 60 * 1000),
      customer: { ...customer },
      delivery: { ...delivery },
      payment,
      items: cart.map(({ id, name, category, price, quantity }) => ({ id, name, category, price, quantity })),
      total: subtotal,
    };
    setInvoice(order);
    setCart([]);
    navigate("confirmation");
  }

  async function handleExcelDownload() {
    setExporting(true);
    try {
      await downloadInvoiceWorkbook(invoice);
    } catch (error) {
      console.error("Could not download the Boujee Belle invoice workbook.", error);
      setNotice("We couldn’t prepare the Excel invoice. Please try again.");
    } finally {
      setExporting(false);
    }
  }

  const invoiceMessage = invoice
    ? [
        `Boujee Belle order invoice ${invoice.number}`,
        `Issued: ${dateTime(invoice.issuedAt)} | Due: ${dateTime(invoice.dueAt)}`,
        `Customer: ${invoice.customer.name} | ${invoice.customer.phone}`,
        `Email: ${invoice.customer.email}`,
        `Delivery: ${invoice.delivery.address}, ${invoice.delivery.date} at ${invoice.delivery.time}`,
        `Payment: ${invoice.payment}`,
        ...invoice.items.map((item) => `${item.quantity} x ${item.name} — ${money(item.price * item.quantity)}`),
        `TOTAL: ${money(invoice.total)}`,
        invoice.delivery.notes ? `Notes: ${invoice.delivery.notes}` : "",
      ].filter(Boolean).join("\n")
    : "";

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(invoiceMessage)}`;
  const emailUrl = `mailto:${BUSINESS.email}?cc=${encodeURIComponent(invoice?.customer.email || "")}&subject=${encodeURIComponent(`Boujee Belle invoice ${invoice?.number || ""}`)}&body=${encodeURIComponent(invoiceMessage)}`;

  return (
    <div className="site-shell">
      <div className="announcement">A little lovely goes a long way <span>✦</span> Complimentary gift wrap with every order</div>
      <header className="site-header">
        <button className="brand" onClick={() => navigate("home")} aria-label="Boujee Belle home">
          <img className="brand-logo" src="/boujee-belle-logo.png" alt="Boujee Belle" />
          <span className="brand-copy"><small>Trendy &amp; Elegant</small></span>
        </button>
        <div className="header-actions">
          <nav className="main-nav" aria-label="Main navigation">
            <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => navigate("home")}>About us</button>
            <button className={page === "shop" ? "nav-link active" : "nav-link"} onClick={() => { setCategory("All"); navigate("shop"); }}>Shop</button>
          </nav>
          <button className="cart-button" onClick={() => navigate("cart")} aria-label={`Shopping bag, ${itemCount} items`}>
            <Icon name="bag" size={20} /><span>My bag</span><b>{itemCount}</b>
          </button>
        </div>
      </header>

      <main>
        {page === "home" && (
          <>
            <section className="hero">
              <img className="hero-image" src={imageUrl(slides[slide].image, 1800)} alt="" />
              <div className="hero-shade" />
              <div className="hero-content">
                <span className="hero-kicker"><span>✦</span> A little something beautiful</span>
                <h1>{slides[slide].title}</h1>
                <p>{slides[slide].subtitle}</p>
                <button className="button button-dark" onClick={() => navigate("shop")}>Find your favourite <Icon name="arrow" size={18} /></button>
              </div>
              <div className="slider-controls" aria-label="Choose a featured image">
                {slides.map((item, index) => <button key={item.title} onClick={() => setSlide(index)} className={index === slide ? "slider-dot selected" : "slider-dot"} aria-label={`Show slide ${index + 1}`} />)}
              </div>
              <span className="hero-caption">YOUR EVERYDAY, A LITTLE MORE LOVELY</span>
            </section>

            <section className="welcome section-wrap">
              <div className="welcome-mark">✳</div>
              <div className="welcome-copy">
                <span className="eyebrow">WELCOME, LOVELY</span>
                <h2>Beautiful things.<br /><em>Even better days.</em></h2>
                <p>At Boujee Belle, we believe the little things can make you feel like your most lovely self. We bring together jewellery and accessories that feel special, look beautiful, and make getting dressed a little more fun.</p>
                <p>Find your new favourite, wear it your way, and let your own kind of sparkle shine.</p>
                <button className="text-link" onClick={() => navigate("shop")}>A little look around <Icon name="arrow" size={17} /></button>
              </div>
              <div className="welcome-image">
                <img src={imageUrl("photo-1611591437281-460bfbe1220a", 900)} alt="A collection of golden jewellery" loading="lazy" />
                <span>Lovely things, lovingly chosen.</span>
              </div>
            </section>

            <section className="category-section">
              <div className="section-wrap">
                <div className="section-heading">
                  <div><span className="eyebrow">A LITTLE SOMETHING FOR EVERY YOU</span><h2>Shop by <em>favourite</em></h2></div>
                  <button className="text-link" onClick={() => navigate("shop")}>See it all <Icon name="arrow" size={17} /></button>
                </div>
                <div className="category-grid">
                  {categories.map((item, index) => (
                    <button className="category-tile" key={item.name} onClick={() => { setCategory(item.name); navigate("shop"); }}>
                      <img src={imageUrl(products[index * 3].image, 500)} alt="" loading="lazy" />
                      <span className="category-tile-shade" />
                      <span className="category-name">{item.name}<Icon name="arrow" size={15} /></span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="featured-section section-wrap">
              <div className="section-heading">
                <div><span className="eyebrow">THE LOVELIES YOU’RE LOVING</span><h2>Picked for <em>you</em></h2></div>
                <button className="text-link" onClick={() => navigate("shop")}>Shop everything <Icon name="arrow" size={17} /></button>
              </div>
              <div className="product-grid">
                {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} onView={setQuickView} onAdd={addToCart} />)}
              </div>
            </section>
          </>
        )}

        {page === "shop" && (
          <section className="shop-page section-wrap">
            <div className="page-intro"><span className="eyebrow">THE BOUJEE BELLE EDIT</span><h1>Find your <em>lovely.</em></h1><p>Little details, big feel-good energy. Take a look around.</p></div>
            <div className="category-filter" aria-label="Filter products by category">
              <button onClick={() => setCategory("All")} className={category === "All" ? "filter-chip chosen" : "filter-chip"}>Everything</button>
              {categories.map((item) => <button key={item.name} onClick={() => setCategory(item.name)} className={category === item.name ? "filter-chip chosen" : "filter-chip"}>{item.name}</button>)}
            </div>
            <p className="result-count">{category === "All" ? "A little of everything" : category} <span>{visibleProducts.length} lovely finds</span></p>
            <div className="product-grid shop-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onView={setQuickView} onAdd={addToCart} />)}</div>
          </section>
        )}

        {page === "cart" && (
          <section className="section-wrap flow-page">
            <div className="page-intro"><span className="eyebrow">YOUR LITTLE LOVELIES</span><h1>Your <em>bag.</em></h1><p>Everything you picked, all in one place.</p></div>
            {cart.length === 0 ? (
              <div className="empty-state"><span className="empty-icon"><Icon name="bag" size={32} /></span><h2>Your bag is waiting for something lovely.</h2><p>Take a peek at our little collection and find a new favourite.</p><button className="button button-dark" onClick={() => navigate("shop")}>Find your favourite <Icon name="arrow" size={18} /></button></div>
            ) : (
              <div className="cart-layout">
                <div className="cart-lines">
                  {cart.map((item) => (
                    <article className="cart-line" key={item.id}>
                      <img src={imageUrl(item.image, 300)} alt={item.name} />
                      <div className="cart-line-info"><span className="eyebrow">{item.category}</span><h2>{item.name}</h2><span>{money(item.price)}</span>
                        <div className="quantity-control"><button onClick={() => changeQuantity(item.id, -1)} aria-label={`Remove one ${item.name}`}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} aria-label={`Add one ${item.name}`}>+</button></div>
                      </div>
                      <strong>{money(item.price * item.quantity)}</strong>
                    </article>
                  ))}
                  <button className="text-link" onClick={() => navigate("shop")}>Continue finding lovelies <Icon name="arrow" size={17} /></button>
                </div>
                <aside className="order-summary"><span className="eyebrow">A LITTLE RECAP</span><h2>Order summary</h2><div className="summary-row"><span>Subtotal</span><strong>{money(subtotal)}</strong></div><div className="summary-row"><span>Delivery</span><span>Confirmed with you</span></div><div className="summary-total"><span>Total</span><strong>{money(subtotal)}</strong></div><p>We’ll confirm your delivery details and fee with you on WhatsApp.</p><button className="button button-dark full-button" onClick={() => navigate("checkout")}>Lovely, let’s check out <Icon name="arrow" size={18} /></button><small>Secure checkout · Invoices due within 24 hours</small></aside>
              </div>
            )}
          </section>
        )}

        {page === "checkout" && (
          <section className="section-wrap flow-page checkout-page">
            <div className="page-intro"><span className="eyebrow">JUST A FEW LITTLE DETAILS</span><h1>Let’s make it <em>yours.</em></h1><p>Add your details so your lovelies can find their way to you.</p></div>
            <form className="checkout-layout" onSubmit={placeOrder}>
              <div className="checkout-fields">
                <section className="form-card">
                  <div className="form-title"><span>01</span><div><h2>Your details</h2><p>Who should we make this invoice for?</p></div></div>
                  <div className="form-grid">
                    <label className="form-field">Full name<input required autoComplete="name" value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Your lovely name" /></label>
                    <label className="form-field">WhatsApp / phone number<input required type="tel" autoComplete="tel" value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} placeholder="+256 7XX XXX XXX" /></label>
                    <label className="form-field">Email address<input required type="email" autoComplete="email" value={customer.email} onChange={(event) => setCustomer({ ...customer, email: event.target.value })} placeholder="you@example.com" /></label>
                    <label className="form-field full-field">Billing address<input required autoComplete="street-address" value={customer.address} onChange={(event) => setCustomer({ ...customer, address: event.target.value })} placeholder="Your address" /></label>
                  </div>
                </section>

                <section className="form-card">
                  <div className="form-title"><span>02</span><div><h2>How would you like to pay?</h2><p>Choose what works best for you.</p></div></div>
                  <div className="payment-options">
                    {["Mobile Money", "Cash"].map((option) => <label className={payment === option ? "payment-option selected-payment" : "payment-option"} key={option}><input type="radio" name="payment" value={option} checked={payment === option} onChange={() => setPayment(option)} /><span className="payment-icon">{option === "Cash" ? "◉" : "◈"}</span><span><strong>{option}</strong><small>{option === "Cash" ? "Pay when your order arrives" : "Pay via mobile money after we confirm"}</small></span></label>)}
                  </div>
                </section>

                <section className="form-card">
                  <div className="form-title"><span>03</span><div><h2>Where should we bring it?</h2><p>Tell us the best place and time for your delivery.</p></div></div>
                  <div className="form-grid">
                    <label className="form-field full-field">Delivery location<input required autoComplete="shipping street-address" value={delivery.address} onChange={(event) => setDelivery({ ...delivery, address: event.target.value })} placeholder="Area, landmark or detailed address" /></label>
                    <label className="form-field">Delivery date<input required type="date" min={dayStamp(new Date())} value={delivery.date} onChange={(event) => setDelivery({ ...delivery, date: event.target.value })} /></label>
                    <label className="form-field">Preferred time<input required type="time" value={delivery.time} onChange={(event) => setDelivery({ ...delivery, time: event.target.value })} /></label>
                    <label className="form-field full-field">Anything else we should know? <span className="optional">(optional)</span><textarea rows="3" value={delivery.notes} onChange={(event) => setDelivery({ ...delivery, notes: event.target.value })} placeholder="A gate colour, a little gift note, or anything helpful..." /></label>
                  </div>
                </section>
              </div>
              <aside className="order-summary checkout-summary"><span className="eyebrow">JUST FOR YOU</span><h2>Your order</h2>{cart.map((item) => <div className="checkout-item" key={item.id}><img src={imageUrl(item.image, 120)} alt="" /><span>{item.name}<small>Qty {item.quantity}</small></span><strong>{money(item.price * item.quantity)}</strong></div>)}<div className="summary-total"><span>Total</span><strong>{money(subtotal)}</strong></div><p>Your invoice will be due within 24 hours of being issued. Delivery fee will be confirmed with you.</p><button className="button button-dark full-button" type="submit">Place my order <Icon name="arrow" size={18} /></button><small>By placing your order, you agree to be contacted to confirm delivery.</small></aside>
            </form>
          </section>
        )}

        {page === "confirmation" && invoice && (
          <section className="section-wrap confirmation-page">
            <div className="confirmation-intro"><span className="success-mark">✓</span><span className="eyebrow">ALL THE LOVELIES, JUST FOR YOU</span><h1>Thank you, {invoice.customer.name.split(" ")[0]}!</h1><p>Your order is ready. Here’s your invoice — send it to us on WhatsApp so we can confirm your order and delivery.</p></div>
            <div className="invoice-card">
              <div className="invoice-head"><div className="brand invoice-brand"><img className="brand-logo" src="/boujee-belle-logo.png" alt="Boujee Belle" /><span className="brand-copy"><small>Trendy &amp; Elegant</small></span></div><div className="invoice-heading"><span className="eyebrow">YOUR INVOICE</span><h2>{invoice.number}</h2></div></div>
              <div className="invoice-meta"><div><span>INVOICE DATE</span><strong>{dateTime(invoice.issuedAt)}</strong></div><div><span>PAYMENT DUE</span><strong>{dateTime(invoice.dueAt)}</strong></div><div><span>PAYMENT METHOD</span><strong>{invoice.payment}</strong></div></div>
              <div className="invoice-parties"><div><span className="eyebrow">BILLED TO</span><strong>{invoice.customer.name}</strong><span>{invoice.customer.address}</span><span>{invoice.customer.phone}</span><span>{invoice.customer.email}</span></div><div><span className="eyebrow">DELIVER TO</span><strong>{invoice.delivery.address}</strong><span>{invoice.delivery.date} · {invoice.delivery.time}</span>{invoice.delivery.notes && <span>{invoice.delivery.notes}</span>}</div></div>
              <div className="invoice-table"><div className="invoice-table-head"><span>ITEM</span><span>QTY</span><span>UNIT PRICE</span><span>AMOUNT</span></div>{invoice.items.map((item) => <div className="invoice-table-row" key={item.id}><span>{item.name}<small>{item.category}</small></span><span>{item.quantity}</span><span>{money(item.price)}</span><strong>{money(item.price * item.quantity)}</strong></div>)}</div>
              <div className="invoice-total"><span>TOTAL DUE</span><strong>{money(invoice.total)}</strong></div>
              <div className="invoice-foot"><span>Thank you for shopping with Boujee Belle.</span><span>{BUSINESS.address} · {BUSINESS.email}</span></div>
            </div>
            <div className="confirmation-actions"><button className="button button-dark" onClick={handleExcelDownload} disabled={exporting}>{exporting ? "Preparing invoice..." : "Download Excel invoice"} <Icon name="arrow" size={18} /></button><a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Send invoice on WhatsApp <Icon name="arrow" size={18} /></a><a className="button button-outline" href={emailUrl}>Email the invoice <Icon name="arrow" size={18} /></a><button className="button button-outline" onClick={() => window.print()}>Print invoice</button></div>
            <p className="confirmation-note">Your invoice is due within 24 hours. WhatsApp and email open a ready-to-send message for you to review and send. Delivery fee will be confirmed separately.</p>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><img className="brand-logo" src="/boujee-belle-logo.png" alt="Boujee Belle" /></div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <span className="eyebrow">A LITTLE LOOK AROUND</span>
            <button onClick={() => navigate("home")}>About us</button>
            <button onClick={() => { setCategory("All"); navigate("shop"); }}>Shop all lovelies</button>
            <button onClick={() => navigate("cart")}>My bag ({itemCount})</button>
          </nav>
          <div className="footer-contact">
            <span className="eyebrow">SAY HELLO</span>
            <div className="footer-contact-links">
              <a href={`tel:+${BUSINESS.whatsapp}`} aria-label="Call Boujee Belle" title="Call us"><Icon name="phone" size={19} /></a>
              <a href={`mailto:${BUSINESS.email}`} aria-label="Email Boujee Belle" title="Email us"><Icon name="email" size={19} /></a>
              <a href="https://www.instagram.com/boujeebelle_ug/" target="_blank" rel="noreferrer" aria-label="Find us on Instagram" title="Instagram"><Icon name="instagram" size={19} /></a>
              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Message Boujee Belle on WhatsApp" title="WhatsApp"><Icon name="whatsapp" size={19} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Boujee Belle</span><span>Trendy &amp; Elegant</span></div>
      </footer>

      {quickView && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setQuickView(null); }}>
          <section className="quick-view" role="dialog" aria-modal="true" aria-labelledby="quick-view-title">
            <button className="modal-close" onClick={() => setQuickView(null)} aria-label="Close product details"><Icon name="close" /></button>
            <img className="quick-view-image" src={imageUrl(quickView.image, 800)} alt={quickView.name} />
            <div className="quick-view-copy"><span className="eyebrow">{quickView.category}</span><h2 id="quick-view-title">{quickView.name}</h2><strong>{money(quickView.price)}</strong><p>{quickView.detail}</p><p className="quick-view-note"><Icon name="heart" size={17} /> A lovely little addition to your collection.</p><button className="button button-dark full-button" onClick={() => { addToCart(quickView); setQuickView(null); }}>Add to my bag <Icon name="bag" size={18} /></button></div>
          </section>
        </div>
      )}
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}

export default App;
