import { GetProduct } from "@/utils/GetAPI";
import ProductRow from "../ui/ProductRow";
import AddBtn from "../ui/AddBtn";

export default async function ProductTable() {
  const { Product } = await GetProduct({status:null,limit:"0"});

  const activeData = Product.filter((p) => p.status === true);
  const inactiveData = Product.filter((p) => p.status === false);

  return (
    <div className="min-h-screen w-full max-w-full min-w-0 bg-slate-100 p-3 sm:p-6">

      {/* HEADER */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Products</h1>
          <p className="text-slate-500">Manage all products</p>
        </div>

        {/* 👉 ADD BUTTON HERE */}
        <AddBtn
          href="/admin/product/add-product"
          name="Add Product"
        />
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-3xl">
          <p>Total</p>
          <h2 className="text-3xl font-bold">{Product.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-green-100">
          <p>Active</p>
          <h2 className="text-3xl font-bold text-green-600">
            {activeData.length}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-red-100">
          <p>Inactive</p>
          <h2 className="text-3xl font-bold text-red-500">
            {inactiveData.length}
          </h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-3xl bg-white shadow-sm">
      <table className="w-full min-w-[720px] overflow-hidden">

        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">#</th>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Slug</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Product.map((item, index) => (
            <ProductRow
            key={item?._id}   
              item={item}
              index={index}
            />
          ))}
        </tbody>

      </table>
      </div>

    </div>
  );
}