import { FileText } from "lucide-react";

export default function ProductDescription({ description }) {
  return (
    <section
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-4
          border-b
          border-slate-100
          px-6
          py-6
          sm:px-8
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-emerald-50
            to-emerald-100
            text-emerald-600
            shadow-sm
          "
        >
          <FileText size={24} />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Details
          </p>

          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Product Description
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <div
          className="
            prose
            prose-slate
            prose-headings:font-bold
            prose-headings:text-slate-900
            prose-p:text-slate-600
            prose-p:leading-8
            prose-li:text-slate-600
            prose-li:leading-7
            prose-strong:text-slate-900
            prose-a:text-emerald-600
            max-w-none
          "
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </section>
  );
}