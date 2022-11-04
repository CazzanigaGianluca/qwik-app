import {component$} from "@builder.io/qwik";
import FullStar from "~/components/icons/full-star";
import EmptyStar from "~/components/icons/empty-star";
import {RatingProps} from "~/components/rating/rating-props";

export default component$((props: RatingProps) => {
    const ratingValue = Math.round(props.rate);

    return (
        <ul className="flex">
            <li>
                {ratingValue >= 1 ? <FullStar/> : <EmptyStar/>}
            </li>
            <li>
                {ratingValue >= 2 ? <FullStar/> : <EmptyStar/>}
            </li>
            <li>
                {ratingValue >= 3 ? <FullStar/> : <EmptyStar/>}
            </li>
            <li>
                {ratingValue >= 4 ? <FullStar/> : <EmptyStar/>}
            </li>
            <li>
                {ratingValue === 5 ? <FullStar/> : <EmptyStar/>}
            </li>
        </ul>
    );
});