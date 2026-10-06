// cn('a', false, 'b') -> 'a b'
export function cn(...args) {
  return args.filter(Boolean).join(' ');
}
