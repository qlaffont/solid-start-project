import { A } from "solid-start";
import Counter from "~/components/Counter";

// ISSUE
import {Icon} from 'solid-start-cmp/src/components/Icon'

// NO ISSUE
// import {Icon} from '../components/Icon'


export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Icon icon="test" variant="primary400" size="xxs" />
    </main>
  );
}
