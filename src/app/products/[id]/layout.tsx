export default function ProductsLayout({
    children,
}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
            <div>
                <h2>Featured product sections</h2>
            </div>
        </div>
    )
}