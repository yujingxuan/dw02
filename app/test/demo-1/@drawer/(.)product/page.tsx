import { RouteDrawer } from "@/components/drawer";
import { ProductDetails } from "../../ProductDetails";

export default function InterceptedProductPage() {
  return (
    <RouteDrawer
      title="产品详情"
      description="这是由拦截路由打开的产品详情抽屉。"
      closeLabel="关闭产品详情"
      size="lg"
      showHeader={false}
      bodyPadding="spacious"
    >
      <div className="mx-auto max-w-5xl">
        <ProductDetails />
      </div>
    </RouteDrawer>
  );
}
