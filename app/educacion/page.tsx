import { Metadata } from "next";
import Education from "../components/pages/Education";
import PageHeading from "../components/shared/PageHeading";
import { siteImage } from "@/lib/site";

const title = "Educación";
const description =
  "Formación académica, habilidades técnicas, idiomas y referencias de Sebastián Tovar Chávez.";

export const metadata: Metadata = {
  title: `${title} | Team Innovasoft`,
  description,
  openGraph: {
    title: `${title} | Team Innovasoft`,
    description,
    images: siteImage,
  },
};

export default function EducationPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title={title}
        description={description}
      />
      <Education />
    </main>
  );
}