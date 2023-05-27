import { useInView } from 'react-intersection-observer';

function AnimatedSection(props) {
  const { children } = props;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className={`relative ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
      {children}
    </section>
  );
}
export default AnimatedSection