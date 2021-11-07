export interface B {
  blah: string;
}

export function b(b: B) {
  return b.blah;
}

export function bUnused() {

}

export interface BUnused {
  unused: string;
}
