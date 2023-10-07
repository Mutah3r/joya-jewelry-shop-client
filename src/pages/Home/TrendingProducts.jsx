import Card from "../../components/shared/Card/Card";

const TrendingProducts = () => {
    return (
        <div className="mt-8">
            <h1 className="py-4 text-[24px] font-bold text-[#333333] border-b border-[var(--primary-color)]">Trending Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 py-4 md:py-6">
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
                <Card
                    tag={{
                        text: 'TRENDING',
                        background: 'red',
                    }}
                />
            </div>
        </div>
    );
};

export default TrendingProducts;