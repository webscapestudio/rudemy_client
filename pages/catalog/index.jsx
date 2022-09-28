import Head from "next/head"
import { Card } from "../../src/components"
import s from "./index.module.scss"
import CatalogLayout from "../../src/layouts/CatalogLayout"

export default function Catalog() {
  return (
    <>
      <Head>
        <title>Rudemy | Каталог</title>
      </Head>

      <CatalogLayout>
        <div className={s.products}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </CatalogLayout>
    </>
  )
}
