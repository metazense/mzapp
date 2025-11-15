"use client";

import { useState } from "react";
import styles from './CustomerLogos.module.css';

export default function CustomerLogos() {
  const logos = [
    { name: "Gorgias", src: "/images/customers/gorgias.svg", width: "w-32" },
    { name: "InDrive", src: "/images/customers/indrive.svg", width: "w-28" },
    { name: "Loggi", src: "/images/customers/loggi.svg", width: "w-24" },
    { name: "Mango", src: "/images/customers/mango.svg", width: "w-28" },
    { name: "Decisiv", src: "/images/customers/decisiv.png", width: "w-28" },
    { name: "Carrefour", src: "/images/customers/carrefour.svg", width: "w-32" },
    { name: "FreeNow", src: "/images/customers/freenow.svg", width: "w-28" },
    { name: "Fundcraft", src: "/images/customers/fundcraft.png", width: "w-32" },
    { name: "Beeline", src: "/images/customers/beeline.svg", width: "w-32" },
    { name: "Bucketplace", src: "/images/customers/bucketplace.svg", width: "w-36" },
    { name: "Hoodie Analytics", src: "/images/customers/hoodie-analytics.svg", width: "w-36" },
    { name: "Intelligaia", src: "/images/customers/intelligaia.svg", width: "w-32" },
  ];

  // Use actual logos
  const useTextLogos = false;

  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, logoName: string) => {
    console.error('Failed to load image:', e.currentTarget.src);
    setFailedImages(prev => new Set(prev).add(logoName));
  };

  const LogoItem = ({ logo, keyPrefix, index }: { logo: typeof logos[0], keyPrefix: string, index: number }) => {
    const hasFailed = failedImages.has(logo.name);

    return (
      <div
        key={`${keyPrefix}-${logo.name}`}
        className={styles.logoItem}
      >
        {/* Animated rings */}
        <div className={styles.animatedRings}>
          <div
            className={styles.ring1}
            style={{ animationDelay: `${index * 0.5}s` }}
          />
          <div
            className={styles.ring2}
            style={{ animationDelay: `${index * 0.3}s` }}
          />
          <div
            className={styles.ring3}
            style={{ animationDelay: `${index * 0.7}s` }}
          />
        </div>

        {/* Wave effect background */}
        <div className={styles.waveBackground}>
          <div
            className={styles.wave}
            style={{ animationDelay: `${index * 0.4}s` }}
          />
        </div>

        {/* Logo content */}
        <div className={styles.logoContent}>
          {useTextLogos || hasFailed ? (
            <div className={styles.textLogo}>
              {logo.name}
            </div>
          ) : (
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className={styles.logoImage}
              onError={(e) => handleImageError(e, logo.name)}
              onLoad={() => console.log(`Loaded: ${logo.name}`)}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className={styles.customerLogos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.headerText}>
            The intelligent enterprise mapping platform trusted by
          </p>
        </div>

        {/* Logo carousel */}
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <LogoItem key={`first-${logo.name}`} logo={logo} keyPrefix="first" index={index} />
            ))}
            {/* Duplicate set for seamless scroll */}
            {logos.map((logo, index) => (
              <LogoItem key={`second-${logo.name}`} logo={logo} keyPrefix="second" index={index} />
            ))}
            {/* Third set for seamless scroll */}
            {logos.map((logo, index) => (
              <LogoItem key={`third-${logo.name}`} logo={logo} keyPrefix="third" index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
