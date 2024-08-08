import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const boardlinks: BoardLink[] = [
    { id: 1, link: "b-222" },
    { id: 2, link: "b-226" },
    { id: 3, link: "b-227" }
];

type BoardLink = {
    id: number;
    link: string;
};

type PreboardsProps = {
    boardlinks: BoardLink[];
};

function Preboards({ boardlinks }: PreboardsProps) {
    const boardlinks = props.boardlinks
    const preboards = boardlinks.map((board, index) => (
        <Card key={board.id}>
            <CardContent>
                <a href={"/board/"+board.link }>Board {board.id}</a>
            </CardContent>
        </Card>
    ))
    return (
        <div>{preboards}</div>
    )
}

export default function Boards() {
    return (
        <div className="flex">
            <Preboards boardlinks={boardlinks} />
        </div>
    )
}
