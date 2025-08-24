import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}