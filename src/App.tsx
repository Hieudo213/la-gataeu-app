import { useState } from "react";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Thực đơn", href: "#menu" },
  { label: "Đặt hàng", href: "#order" },
  { label: "Đánh giá", href: "#reviews" },
  { label: "Liên hệ", href: "#contact" },
];

const CAKES = [
  {
    id: 1,
    name: "Bánh Hoa Hồng Vàng",
    desc: "Bánh vanilla 3 tầng phủ kem bơ hoa hồng, trang trí cánh hồng ăn được và bụi vàng óng ánh.",
    price: "580.000đ",
    tag: "Bán chạy",
    img: "https://images.unsplash.com/photo-1762918988304-97d4a5840a4a?w=600&h=700&fit=crop&auto=format",
    alt: "Bánh sinh nhật trắng trang trí ruy băng vàng",
  },
  {
    id: 2,
    name: "Bánh Chocolate Đen",
    desc: "Bánh chocolate Bỉ đậm đà, nhân ganache mịn, phủ mirror glaze bóng như gương.",
    price: "650.000đ",
    tag: "Mới",
    img: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=600&h=700&fit=crop&auto=format",
    alt: "Bánh chocolate cắt lát trên đĩa",
  },
  {
    id: 3,
    name: "Bánh Pastel Cầu Vồng",
    desc: "Bánh nhiều lớp màu pastel, kem cheese tươi, phủ hoa khô và sprinkles ngọt ngào.",
    price: "720.000đ",
    tag: "Đặc biệt",
    img: "https://images.unsplash.com/photo-1761296152332-88ada22be48a?w=600&h=700&fit=crop&auto=format",
    alt: "Bánh pastel cắt ra thành 8 miếng",
  },
  {
    id: 4,
    name: "Bánh Flamingo Hồng",
    desc: "Bánh strawberry 2 tầng, nhân mứt dâu tây tươi, trang trí flamingo và hoa kem.",
    price: "490.000đ",
    tag: "Yêu thích",
    img: "https://images.unsplash.com/photo-1736959574670-a8ace9856e1c?w=600&h=700&fit=crop&auto=format",
    alt: "Bánh hồng trang trí flamingo",
  },
  {
    id: 5,
    name: "Bánh Mini Tiệc",
    desc: "Set 12 bánh cupcake handmade đa vị: vanilla, chocolate, matcha, dâu — hoàn hảo cho tiệc nhóm.",
    price: "380.000đ",
    tag: "Gợi ý",
    img: "https://images.unsplash.com/photo-1523757956233-94a86ff74ea5?w=600&h=700&fit=crop&auto=format",
    alt: "Bàn tiệc dessert đầy cupcake và bánh ngọt",
  },
  {
    id: 6,
    name: "Bánh Cưới Tiệc",
    desc: "Bánh 3 tầng sang trọng phủ fondant, hoa tươi thật, thích hợp cho tiệc sinh nhật lớn.",
    price: "1.200.000đ",
    tag: "Cao cấp",
    img: "https://images.unsplash.com/photo-1776267890233-a62d28647928?w=600&h=700&fit=crop&auto=format",
    alt: "Bàn tiệc bánh cưới và dessert trang trí hoa",
  },
];

const REVIEWS = [
  {
    name: "Nguyễn Minh Anh",
    role: "Khách hàng thân thiết",
    text: "Bánh đẹp hơn hẳn tưởng tượng! Kem mịn, vị ngọt vừa phải, con tôi thích mê. Năm nào cũng đặt ở đây!",
    stars: 5,
    avatar: "M",
    color: "#c4745a",
  },
  {
    name: "Trần Bảo Châu",
    role: "Mẹ bỉm sữa",
    text: "Giao hàng đúng giờ, đóng gói cẩn thận. Bánh chocolate đúng chuẩn, cả gia đình đều khen ngon!",
    stars: 5,
    avatar: "C",
    color: "#8b6f5e",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Doanh nhân",
    text: "Đặt bánh cho công ty 50 người, phục vụ chuyên nghiệp, bánh đẹp như hình. Nhất định order tiếp.",
    stars: 5,
    avatar: "N",
    color: "#a0785a",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Chọn mẫu bánh",
    desc: "Duyệt bộ sưu tập 50+ mẫu bánh hoặc thiết kế theo yêu cầu riêng của bạn.",
  },
  {
    step: "02",
    title: "Đặt hàng & Thanh toán",
    desc: "Đặt trước tối thiểu 2 ngày. Thanh toán online tiện lợi qua chuyển khoản hoặc ví điện tử.",
  },
  {
    step: "03",
    title: "Nhận bánh & Tận hưởng",
    desc: "Giao tận nơi hoặc đến lấy tại cửa hàng. Bánh được đóng gói sang trọng, bảo quản kỹ lưỡng.",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Bán chạy": "bg-amber-100 text-amber-800",
  Mới: "bg-emerald-100 text-emerald-800",
  "Đặc biệt": "bg-purple-100 text-purple-800",
  "Yêu thích": "bg-pink-100 text-pink-800",
  "Gợi ý": "bg-sky-100 text-sky-800",
  "Cao cấp": "bg-rose-100 text-rose-800",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cake: "",
    date: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--color-background)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{
          background: "rgba(253,248,242,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl">🎂</span>
          <span
            className="font-display text-xl font-bold tracking-wide"
            style={{ color: "var(--color-primary)" }}
          >
            La Gâteau
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{
            background: "var(--color-primary)",
            color: "var(--color-primary-foreground)",
          }}
        >
          Đặt hàng ngay
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Mở menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "var(--color-foreground)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "var(--color-foreground)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "var(--color-foreground)" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 pt-20 px-6 flex flex-col gap-4"
          style={{ background: "var(--color-background)" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-2xl font-semibold py-3 border-b"
              style={{
                color: "var(--color-foreground)",
                borderColor: "var(--color-border)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* background blob */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, #f5c6b8 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, #e8d5c4 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center py-16">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <span
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "var(--color-secondary)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-accent)",
              }}
            >
              ✦ Tiệm bánh thủ công từ 2018 ✦
            </span>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: "var(--color-foreground)" }}
            >
              Mỗi chiếc bánh
              <br />
              <em className="not-italic" style={{ color: "var(--color-primary)" }}>
                là một câu chuyện
              </em>
              <br />
              đáng nhớ
            </h1>
            <p
              className="text-lg leading-relaxed max-w-md"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Bánh sinh nhật handmade cao cấp — được làm từ nguyên liệu tươi ngon nhất, thiết kế theo yêu cầu, giao tận nơi tại Hà Nội.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-primary-foreground)",
                  boxShadow: "0 8px 30px rgba(196,116,90,0.35)",
                }}
              >
                Xem thực đơn
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:bg-[var(--color-muted)]"
                style={{
                  border: "1.5px solid var(--color-border)",
                  color: "var(--color-foreground)",
                }}
              >
                Đặt hàng ngay
              </a>
            </div>
            {/* Stats */}
            <div className="flex gap-8 mt-4">
              {[
                { val: "2.500+", label: "Khách hàng hài lòng" },
                { val: "50+", label: "Mẫu bánh" },
                { val: "4.9★", label: "Đánh giá trung bình" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {s.val}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="relative h-[520px] hidden md:block">
            <div
              className="absolute top-0 right-12 w-64 h-72 rounded-3xl overflow-hidden shadow-2xl"
              style={{ transform: "rotate(3deg)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1762918988304-97d4a5840a4a?w=500&h=600&fit=crop&auto=format"
                alt="Bánh sinh nhật trắng trang trí vàng"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-4 right-0 w-52 h-64 rounded-3xl overflow-hidden shadow-xl"
              style={{ transform: "rotate(-2deg)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1625706888710-949be649f20d?w=400&h=500&fit=crop&auto=format"
                alt="Bánh nâu với nến hồng"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute top-20 left-0 w-48 h-60 rounded-3xl overflow-hidden shadow-xl"
              style={{ transform: "rotate(-3deg)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1736959574670-a8ace9856e1c?w=400&h=480&fit=crop&auto=format"
                alt="Bánh hồng flamingo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* floating badge */}
            <div
              className="absolute top-10 left-24 px-4 py-2 rounded-2xl shadow-lg text-sm font-semibold"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-foreground)",
              }}
            >
              🎉 Miễn phí giao nội thành
            </div>
            <div
              className="absolute bottom-20 right-44 px-4 py-2 rounded-2xl shadow-lg text-sm font-semibold"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
              }}
            >
              ⏱ Đặt trước 2 ngày
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#menu"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-muted-foreground)" }}>
            Cuộn xuống
          </span>
          <span className="text-lg animate-bounce">↓</span>
        </a>
      </section>

      {/* MARQUEE BANNER */}
      <div
        className="overflow-hidden py-4"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-primary-foreground)",
        }}
      >
        <div
          className="flex gap-12 whitespace-nowrap animate-[marquee_18s_linear_infinite]"
          style={{ width: "max-content" }}
        >
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex gap-12 font-medium text-sm tracking-wide">
                <span>🎂 BÁNH SINH NHẬT HANDMADE</span>
                <span>✦ GIAO TẬN NƠI HÀ NỘI</span>
                <span>🌸 THIẾT KẾ THEO YÊU CẦU</span>
                <span>✦ NGUYÊN LIỆU TƯƠI NGON</span>
                <span>🎁 QUÀ TẶNG SANG TRỌNG</span>
                <span>✦ ĐẶT TRƯỚC 2 NGÀY</span>
              </span>
            ))}
        </div>
      </div>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            ✦ Thực đơn của chúng tôi ✦
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-foreground)" }}
          >
            Những chiếc bánh
            <br />
            <em className="italic" style={{ color: "var(--color-primary)" }}>
              được yêu thích nhất
            </em>
          </h2>
          <p
            className="max-w-lg text-base leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Tất cả bánh được làm thủ công mỗi ngày, không chất bảo quản, từ nguyên liệu nhập khẩu cao cấp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAKES.map((cake) => (
            <div
              key={cake.id}
              className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 20px rgba(44,24,16,0.06)",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cake.img}
                  alt={cake.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: "var(--color-foreground)" }}
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${TAG_COLORS[cake.tag] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {cake.tag}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3
                  className="font-display text-xl font-semibold"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {cake.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {cake.desc}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span
                    className="font-display text-xl font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {cake.price}
                  </span>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "var(--color-secondary)",
                      color: "var(--color-primary)",
                      border: "1px solid var(--color-accent)",
                    }}
                  >
                    Đặt ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section
        id="order"
        className="py-24 px-6 md:px-12"
        style={{ background: "var(--color-secondary)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              ✦ Quy trình đặt bánh ✦
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-foreground)" }}
            >
              Đặt bánh{" "}
              <em className="italic" style={{ color: "var(--color-primary)" }}>
                dễ dàng
              </em>{" "}
              trong 3 bước
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connector line */}
            <div
              className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px"
              style={{ background: "var(--color-accent)" }}
            />

            {STEPS.map((s) => (
              <div
                key={s.step}
                className="relative flex flex-col items-center text-center gap-4 p-8 rounded-3xl"
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl font-bold shadow-md"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-primary-foreground)",
                  }}
                >
                  {s.step}
                </div>
                <h3
                  className="font-display text-xl font-semibold"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            ✦ Khách hàng nói gì ✦
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-foreground)" }}
          >
            Niềm vui từ{" "}
            <em className="italic" style={{ color: "var(--color-primary)" }}>
              mỗi chiếc bánh
            </em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-5 p-8 rounded-3xl"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 20px rgba(44,24,16,0.06)",
              }}
            >
              <div className="flex gap-1">
                {Array(r.stars)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>
              <p
                className="text-sm leading-relaxed italic flex-1"
                style={{ color: "var(--color-foreground)" }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--color-border)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base"
                  style={{ background: r.color }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div
        className="mx-6 md:mx-12 mb-16 rounded-3xl overflow-hidden relative"
        style={{ background: "var(--color-foreground)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #f5c6b8 0%, transparent 50%), radial-gradient(circle at 80% 50%, #e8b4a0 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h3
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "#fdf8f2" }}
            >
              Đặt bánh cho dịp đặc biệt?
            </h3>
            <p className="text-base opacity-70" style={{ color: "#fdf8f2" }}>
              Liên hệ ngay để được tư vấn và thiết kế bánh theo ý thích của bạn.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-xl"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
            }}
          >
            Tư vấn miễn phí →
          </a>
        </div>
      </div>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="py-24 px-6 md:px-12"
        style={{ background: "var(--color-secondary)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center gap-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              ✦ Đặt hàng ngay hôm nay ✦
            </span>
            <h2
              className="font-display text-4xl font-bold"
              style={{ color: "var(--color-foreground)" }}
            >
              Để lại thông tin
              <br />
              <em className="italic" style={{ color: "var(--color-primary)" }}>
                chúng tôi sẽ liên hệ
              </em>
            </h2>
          </div>

          {submitted ? (
            <div
              className="text-center p-12 rounded-3xl flex flex-col items-center gap-4"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <span className="text-5xl">🎂</span>
              <h3
                className="font-display text-2xl font-bold"
                style={{ color: "var(--color-foreground)" }}
              >
                Cảm ơn bạn đã đặt hàng!
              </h3>
              <p style={{ color: "var(--color-muted-foreground)" }}>
                Chúng tôi sẽ liên hệ xác nhận đơn trong vòng 30 phút.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-primary-foreground)",
                }}
              >
                Đặt thêm bánh
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-3xl"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 8px 40px rgba(44,24,16,0.08)",
              }}
            >
              {[
                { key: "name", label: "Họ và tên", type: "text", placeholder: "Nguyễn Thị Hoa" },
                { key: "phone", label: "Số điện thoại", type: "tel", placeholder: "0912 345 678" },
              ].map((f) => (
                <div key={f.key} className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {f.label} <span style={{ color: "var(--color-primary)" }}>*</span>
                  </label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={formData[f.key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, [f.key]: e.target.value }))
                    }
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: "var(--color-background)",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-foreground)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    Loại bánh <span style={{ color: "var(--color-primary)" }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.cake}
                    onChange={(e) => setFormData((prev) => ({ ...prev, cake: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: "var(--color-background)",
                      border: "1.5px solid var(--color-border)",
                      color: formData.cake ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <option value="" disabled>
                      Chọn mẫu bánh
                    </option>
                    {CAKES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="Thiết kế riêng">Thiết kế riêng</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    Ngày nhận bánh <span style={{ color: "var(--color-primary)" }}>*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: "var(--color-background)",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-foreground)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Ghi chú thêm
                </label>
                <textarea
                  rows={3}
                  placeholder="Lời chúc, màu sắc yêu thích, dị ứng thực phẩm..."
                  value={formData.note}
                  onChange={(e) => setFormData((prev) => ({ ...prev, note: e.target.value }))}
                  className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    background: "var(--color-background)",
                    border: "1.5px solid var(--color-border)",
                    color: "var(--color-foreground)",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-full font-bold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-lg"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-primary-foreground)",
                  boxShadow: "0 8px 30px rgba(196,116,90,0.35)",
                }}
              >
                Gửi yêu cầu đặt bánh 🎂
              </button>

              <p
                className="text-center text-xs"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Chúng tôi sẽ xác nhận đơn hàng trong vòng 30 phút qua điện thoại.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-6 md:px-12"
        style={{ background: "var(--color-foreground)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(253,248,242,0.1)" }}>
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎂</span>
              <span
                className="font-display text-xl font-bold"
                style={{ color: "#fdf8f2" }}
              >
                La Gâteau
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-60" style={{ color: "#fdf8f2" }}>
              Tiệm bánh sinh nhật handmade cao cấp tại Hà Nội. Chúng tôi tin rằng mỗi dịp đặc biệt đều xứng đáng có một chiếc bánh hoàn hảo.
            </p>
            <div className="flex gap-4 mt-2">
              {["Facebook", "Instagram", "Zalo"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs px-3 py-1.5 rounded-full opacity-60 hover:opacity-100 transition-opacity"
                  style={{
                    border: "1px solid rgba(253,248,242,0.2)",
                    color: "#fdf8f2",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4
              className="font-semibold text-sm tracking-widest uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Liên kết
            </h4>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: "#fdf8f2" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4
              className="font-semibold text-sm tracking-widest uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Liên hệ
            </h4>
            {[
              { icon: "📍", text: "18 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội" },
              { icon: "📞", text: "0901 234 567" },
              { icon: "🕐", text: "7:00 – 21:00 hàng ngày" },
              { icon: "✉️", text: "hello@lagateur.vn" },
            ].map((c) => (
              <div key={c.text} className="flex gap-2 text-sm opacity-60" style={{ color: "#fdf8f2" }}>
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs opacity-40" style={{ color: "#fdf8f2" }}>
            © 2024 La Gâteau. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs opacity-40" style={{ color: "#fdf8f2" }}>
            Làm với ❤️ tại Hà Nội
          </p>
        </div>
      </footer>

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
