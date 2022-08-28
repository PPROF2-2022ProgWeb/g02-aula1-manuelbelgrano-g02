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
-- Table `mydb`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`departamento` (
  `idDepartamento` INT(4) NOT NULL,
  `depto` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idDepartamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ciudad` (
  `idciudad` INT(6) NOT NULL AUTO_INCREMENT,
  `ciudad` VARCHAR(120) NOT NULL,
  `id_depto` INT(4) NOT NULL,
  PRIMARY KEY (`idciudad`),
  UNIQUE INDEX `idciudad_UNIQUE` (`idciudad` ASC) VISIBLE,
  INDEX `id_depto_idx` (`id_depto` ASC) VISIBLE,
  CONSTRAINT `id_depto`
    FOREIGN KEY (`id_depto`)
    REFERENCES `mydb`.`departamento` (`idDepartamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Roles` (
  `id_Rol` INT(1) NOT NULL,
  `nombreRol` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_Rol`),
  UNIQUE INDEX `id_Rol_UNIQUE` (`id_Rol` ASC) VISIBLE,
  UNIQUE INDEX `nombreRol_UNIQUE` (`nombreRol` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `idUsuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `nombreUsuario` VARCHAR(60) NOT NULL,
  `clave` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `imagenUsuario` BLOB NULL,
  `celular` BIGINT(13) NOT NULL,
  `id_ciudad` INT(6) NOT NULL,
  `id_Rol` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) VISIBLE,
  INDEX `id_ciudad_idx` (`id_ciudad` ASC) VISIBLE,
  INDEX `id_Rol_idx` (`id_Rol` ASC) VISIBLE,
  CONSTRAINT `id_ciudad`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `mydb`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_Rol`
    FOREIGN KEY (`id_Rol`)
    REFERENCES `mydb`.`Roles` (`id_Rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`producto` (
  `idProducto` INT(11) NOT NULL AUTO_INCREMENT,
  `clave` VARCHAR(10) NOT NULL,
  `costo` INT(10) NOT NULL,
  `detalles` VARCHAR(100) NOT NULL,
  `fecha_ingreso` DATE NOT NULL,
  PRIMARY KEY (`idProducto`),
  UNIQUE INDEX `idProducto_UNIQUE` (`idProducto` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Carrito` (
  `idCarrito` INT(11) NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  `idProducto` INT(11) NOT NULL,
  PRIMARY KEY (`idCarrito`),
  UNIQUE INDEX `idventa_UNIQUE` (`idCarrito` ASC) VISIBLE,
  INDEX `id_Usuario_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `idProducto_idx` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `id_Usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idProducto`
    FOREIGN KEY (`idProducto`)
    REFERENCES `mydb`.`producto` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`medio_de_Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`medio_de_Pago` (
  `idmedio_de_Pago` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idmedio_de_Pago`),
  UNIQUE INDEX `idmedioPago_UNIQUE` (`idmedio_de_Pago` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pago` (
  `idpago` INT(11) NOT NULL,
  `valor` INT(11) NOT NULL,
  `descripcion` LONGTEXT NULL,
  `estado` VARCHAR(30) NOT NULL,
  `idmedio_de_Pago` INT(11) NOT NULL,
  PRIMARY KEY (`idpago`),
  UNIQUE INDEX `idservicio_UNIQUE` (`idpago` ASC) VISIBLE,
  INDEX `id_medio_de_Pago_idx` (`idmedio_de_Pago` ASC) VISIBLE,
  CONSTRAINT `id_medio_de_Pago`
    FOREIGN KEY (`idmedio_de_Pago`)
    REFERENCES `mydb`.`medio_de_Pago` (`idmedio_de_Pago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`factura` (
  `idfactura` BIGINT(20) NOT NULL,
  `id_usuario` INT(11) NOT NULL,
  `total` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `direccion` VARCHAR(30) NULL,
  `id_ciudad` INT(6) NOT NULL,
  `idCarrito` INT(11) NOT NULL,
  `idPago` INT(11) NOT NULL,
  `id_medio_de_Pago` INT(1) NOT NULL,
  PRIMARY KEY (`idfactura`),
  INDEX `id_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `id_ciudad_idx` (`id_ciudad` ASC) VISIBLE,
  INDEX `idCarrito_idx` (`idCarrito` ASC) VISIBLE,
  INDEX `idPago_idx` (`idPago` ASC) VISIBLE,
  INDEX `id_medio_de_Pago_idx` (`id_medio_de_Pago` ASC) VISIBLE,
  CONSTRAINT `id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `mydb`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_ciudad`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `mydb`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idCarrito`
    FOREIGN KEY (`idCarrito`)
    REFERENCES `mydb`.`Carrito` (`idCarrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idPago`
    FOREIGN KEY (`idPago`)
    REFERENCES `mydb`.`pago` (`idpago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_medio_de_Pago`
    FOREIGN KEY (`id_medio_de_Pago`)
    REFERENCES `mydb`.`medio_de_Pago` (`idmedio_de_Pago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`abono`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`abono` (
  `idabono` INT(11) NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `valor` INT(10) NOT NULL,
  `id_factura` BIGINT(20) NOT NULL,
  PRIMARY KEY (`idabono`),
  UNIQUE INDEX `idabono_UNIQUE` (`idabono` ASC) VISIBLE,
  INDEX `id_factura_idx` (`id_factura` ASC) VISIBLE,
  CONSTRAINT `id_factura`
    FOREIGN KEY (`id_factura`)
    REFERENCES `mydb`.`factura` (`idfactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
