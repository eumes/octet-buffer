export declare class OctetBuffer {
    private _backingBuffer;
    private _position;
    backingBuffer: Buffer;
    position: number;
    available: number;
    remaining: number;
    constructor(buffer?: Buffer);
    private incrementPositionBy(incrementBy);
    reset(): void;
    readUInt8(): number;
    readUInt16(): number;
    readUInt24(): number;
    readUInt32(): number;
    readBufferRemainig(): Buffer;
    readBuffer(count?: number): Buffer;
    writeUInt8(uint: number): OctetBuffer;
    writeUInt16(uint: number): OctetBuffer;
    writeUInt24(uint: number): OctetBuffer;
    writeUInt32(uint: number): OctetBuffer;
    writeArray(array: number[]): OctetBuffer;
    writeBuffer(buffer: Buffer): OctetBuffer;
    private extendBackingBufferToAcceptAdditionalBytes(additionalBytes);
    private writeBufferToBackingBuffer(buffer);
    toString(): string;
    private static readUInt24BE(buffer, position);
    private static writeUInt24BE(buffer, uint, positon);
    static hexStringMatchesHexBitflags(value: string, bitflags: string): boolean;
    static hexStringMatchesHexBitpattern(value: string, bitpattern: string): boolean;
}
