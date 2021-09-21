export type Memory = {
  read: (address: number) => number
  write: (address: number, data: number) => void
  load: (arr: Int32Array) => void
  LENGTH: number
}

/**
 * 
 * @returns 
 */
export function createMemory(): Memory {

  const LENGTH = 2000
  const MEMORY = new Int32Array(LENGTH)

  // memory read wrapper
  const read = (address: number) => MEMORY[address]
  // memory write wrapper
  const write = (address: number, data: number) => { MEMORY[address] = data }

  const load = (arr: Int32Array) => MEMORY.set(arr)

  return { read, write, load, LENGTH }
}

const programC = (() => {
  return [
    1 + 0,    // Load 0
    14,   // CopyToX
    4 + (19 << 24),  // LoadIdxX 32 (load from A-Z table) 
    21 + (8 << 24),  // JumpIfEqual 8
    9 + (2 << 24),  // Put 2 (output as char)
    25,   // IncX
    20 + (2 << 24),  // Jump 2
    1 + 0,   // Load 0
    16,   // CopyToY
    5 + (46 << 24),  // LoadIdxY 59 (load from 1-10 table)
    21 + (16 << 24),  // JumpIfEqual 16
    9 + (1 << 24),  // Put 1 (output as int)
    1 + (1 << 24),   // Load 1  (because no IncY instruction)
    11,   // AddY
    16,  // CopyToY
    20 + (8 << 24), // Jump 8
    1 + (10 << 24),  // Load newline char
    9 + (2 << 24), // Print newline
    50,   // End
    65,  // Data A-Z
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    0,
    1,   // Data 1-10
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    0,
  ]
})()
