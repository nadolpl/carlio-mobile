import {ActivityIndicator} from 'react-native';

interface LoaderProps {
  active: boolean
}

const Loader = ({active}: LoaderProps) => {
  return active && (
    <ActivityIndicator/>
  );
};

export default Loader;