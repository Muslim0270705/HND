import { SectionModels } from "../HomeSection/SectionModels"
import { SectionNews } from "../HomeSection/SectionNews"
import { SectionBg } from "../HomeSection/SectionBg"

export function HomeView() {
    return (
        <div className="container">
            <SectionBg />
            <SectionModels />
            <SectionNews />
        </div>
    )
}