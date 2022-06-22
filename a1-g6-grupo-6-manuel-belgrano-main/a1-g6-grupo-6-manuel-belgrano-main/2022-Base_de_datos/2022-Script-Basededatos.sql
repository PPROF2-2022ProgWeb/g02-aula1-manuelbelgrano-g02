
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `clave` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Mediodepago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Mediodepago` (
  `idMediodepago` INT NOT NULL AUTO_INCREMENT,
  `otrosDetalles` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idMediodepago`),
  UNIQUE INDEX `idMedio_de_pago_UNIQUE` (`idMediodepago` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Factura` (
  `idFactura` INT NOT NULL AUTO_INCREMENT,
  `id_Usuario` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  `id_Mediodepago` INT NOT NULL,
  `total` INT NOT NULL,
  PRIMARY KEY (`idFactura`),
  UNIQUE INDEX `idFactura_UNIQUE` (`idFactura` ASC) VISIBLE,
  CONSTRAINT `id_usuario`
    FOREIGN KEY (`id_Usuario`)
    REFERENCES `mydb`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_Mediodepago`
    FOREIGN KEY (`id_Mediodepago`)
    REFERENCES `mydb`.`Mediodepago` (`idMediodepago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Producto` (
  `id_Producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` INT NOT NULL,
  `detalles` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Producto`),
  UNIQUE INDEX `id_Producto_UNIQUE` (`id_Producto` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Detalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Detalle` (
  `id_Detalle` INT NOT NULL AUTO_INCREMENT,
  `id_Factura` INT NOT NULL,
  `id_Producto` INT NOT NULL,
  `precio` INT NOT NULL,
  PRIMARY KEY (`id_Detalle`),
  UNIQUE INDEX `id_Detalle_UNIQUE` (`id_Detalle` ASC) VISIBLE,
  INDEX `id_Factura_idx` (`id_Factura` ASC) VISIBLE,
  INDEX `id_Producto_idx` (`id_Producto` ASC) VISIBLE,
  CONSTRAINT `id_Factura`
    FOREIGN KEY (`id_Factura`)
    REFERENCES `mydb`.`Factura` (`idFactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_Producto`
    FOREIGN KEY (`id_Producto`)
    REFERENCES `mydb`.`Producto` (`id_Producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
